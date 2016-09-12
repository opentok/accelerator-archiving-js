/* global ArchivingAccPack define */
(function () {
  /** Include external dependencies */
  var $;

  if (typeof module === 'object' && typeof module.exports === 'object') {
    /* eslint-disable import/no-unresolved */
    $ = require('jquery');
    /* eslint-enable import/no-unresolved */
  } else {
    $ = this.$;
  }

  var _startURL;
  var _stopURL;
  var _currentArchive;
  var _recording = false;
  var _controlAdded = false;
  var _accPack;
  var _session;

  var _triggerEvent = function (event, data) {
    if (_accPack) {
      _accPack.triggerEvent(event, data);
    }
  };

  var _setDownloadModal = function (archive) {
    var date = new Date(null);
    date.setSeconds(archive.duration);

    var readableDate = date.toISOString().substr(11, 8);

    /* eslint-disable prefer-template */
    var modalTemplate = ['<div id="otsArchivingModal" class="ots-archiving-modal">',
      '<div class="modal-content">',
      '<div>',
      '<span id="closeArchiveModal" class="close-button">×</span>',
      '<h2 class="archive-name">' + archive.name + '</h2>',
      '<a href=' + archive.url + ' class="download" target="_blank">Download Archive</a>',
      '</div>',
      '<div>',
      '<span class="date-time"> File size: </span>',
      '<span class="archive-information">' + archive.size / (1000 * 1000) + ' MB</span>',
      '</br>',
      '<span class="date-time"> Duration: </span>',
      '<span class="archive-information">' + readableDate + '</span>',
      '</br>',
      '</div>',
      '</div>',
      '</div>'
    ].join('\n');
    /* eslint-enable prefer-template */

    var modalParent = document.querySelector('#otsWidget');

    var el = document.createElement('div');
    el.innerHTML = modalTemplate;

    var enableModal = el.firstChild;
    modalParent.appendChild(enableModal);

    // Get the modal
    var modal = document.getElementById('otsArchivingModal');

    // Get the button that opens the modal
    // var btn = document.getElementById('myBtn');

    // Get the <span> element that closes the modal
    var closeModal = document.getElementById('closeArchiveModal');

    // display the modal as soon the archive is ready
    modal.style.display = 'block';

    // When the user clicks on <closeModal> (x), close the modal
    closeModal.onclick = function () {
      modal.style.display = 'none';
    };
  };


  var start = function () {
    $.post(_startURL, { sessionId: _session.id })
      .then(function (archive) {
        _currentArchive = archive;
        _triggerEvent('startArchive', archive);
      })
      .fail(function (error) {
        _triggerEvent('archiveError', error);
      });
  };

  var stop = function () {
    _triggerEvent('stopArchive');
    $.post(_stopURL, { archiveId: _currentArchive.id })
      .then(function (data) {
        _setDownloadModal(data);
        _triggerEvent('archiveReady', data);
      })
      .fail(function (error) {
        _triggerEvent('archiveError', error);
      });
  };

  var _appendControl = function (container) {
    var feedControls = document.querySelector(container);

    var btn = '<div class="ots-video-control circle archiving enabled" id="enableArchiving"></div>';

    var el = document.createElement('div');
    el.innerHTML = btn;

    var enableArchiving = el.firstChild;

    feedControls.appendChild(enableArchiving);

    _controlAdded = true;

    enableArchiving.onclick = function () {
      if (_recording) {
        _recording = false;
        document.querySelector('#enableArchiving').classList.remove('active');
        stop();
      } else {
        _recording = true;
        document.querySelector('#enableArchiving').classList.add('active');
        start();
      }
    };
  };

  var _registerEvents = function () {
    var events = ['startArchive', 'stopArchive', 'archiveReady', 'archiveError'];
    _accPack.registerEvents(events);
  };

  var _addEventListeners = function () {
    _accPack.registerEventListener('startCall', function () {
      if (_controlAdded) {
        document.getElementById('enableArchiving').classList.remove('ots-hidden');
      } else {
        _appendControl();
      }
    });

    _accPack.registerEventListener('endCall', function () {
      document.getElementById('enableArchiving').classList.add('ots-hidden');
    });
  };

  var _validateOptions = function (options) {
    var requiredOptions = ['session', 'startURL', 'stopURL'];

    requiredOptions.forEach(function (option) {
      if (!options[option]) {
        throw new Error(['OT: Archiving Accelerator Pack requires a', option].join(''));
      }
    });

    _session = options.session;
    _startURL = options.startURL;
    _stopURL = options.stopURL;
    _accPack = options.accPack;
  };

  var ArchivingAccPack = function (options) {
    _validateOptions(options);

    var controlsContainer = options.controlsContainer || '#feedControls';
    _appendControl(controlsContainer);

    _registerEvents();
    _addEventListeners();
  };

  ArchivingAccPack.prototype = {
    constructor: ArchivingAccPack,
  };

  if (typeof exports === 'object') {
    module.exports = ArchivingAccPack;
  } else if (typeof define === 'function' && define.amd) {
    define(function () {
      return ArchivingAccPack;
    });
  } else {
    this.ArchivingAccPack = ArchivingAccPack;
  }
}.call(this));
