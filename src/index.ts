// WDA
const EVENT_CLOSE_LEFT_PANEL = 'wazo/EVENT_CLOSE_LEFT_PANEL';
const EVENT_OPEN_LEFT_PANEL = 'wazo/EVENT_OPEN_LEFT_PANEL';
const EVENT_ON_LOADED = 'wazo/ON_LOADED';
const EVENT_START_CALL = 'wazo/START_CALL';
const EVENT_ON_CALL_INCOMING = 'wazo/EVENT_ON_CALL_INCOMING';
const EVENT_ON_CALL_MADE = 'wazo/EVENT_ON_CALL_MADE';
const EVENT_ON_CALL_ANSWERED = 'wazo/EVENT_ON_CALL_ANSWERED';
const EVENT_ON_CALL_HANGED_UP = 'wazo/EVENT_ON_CALL_HANGED_UP';
const EVENT_OPEN_LINK = 'wazo/EVENT_OPEN_LINK';
const EVENT_CREATE_MEETING = 'wazo/EVENT_CREATE_MEETING';
const EVENT_OPEN_MEETING_LOBBY = 'wazo/EVENT_OPEN_MEETING_LOBBY';
const EVENT_OPEN_SETTINGS = 'wazo/EVENT_OPEN_SETTINGS';
const EVENT_ON_MEETING_CREATED = 'wazo/EVENT_ON_MEETING_CREATED';
const EVENT_ROUTE_CHANGE = 'wazo/EVENT_ROUTE_CHANGE';
const EVENT_ON_LOGOUT = 'wazo/EVENT_ON_LOGOUT';
const EVENT_WS_MESSAGE = 'wazo/EVENT_WS_MESSAGE';

// Portal
const EVENT_ON_CONNECTED_TO_STACK = 'wazo/EVENT_ON_CONNECTED_TO_STACK';
const EVENT_ON_SWITCH_STACK_TENANT = 'wazo/EVENT_ON_SWITCH_STACK_TENANT';

export interface Call {
  answered: boolean;
  sipCallId: string;
  callId: string;
  sipStatus: string;
  number: string;
  displayName: string;
  callerNumber: string;
  creationTime: Date | null;
  answerTime: Date | null;
  endTime: Date | null;
}

export interface MeetingAuthorization {
  meetingUuid: string;
  uuid: string;
  userUuid: string;
  userName: string;
  status: string;
}

export interface Meeting {
  guestSipAuthorization: string;
  uri: string;
  uuid: string;
  name: string;
  port: string;
  extension: string;
  persistent: boolean;
  ownerUuids: Array<string>;
  creationTime: Date;
  pendingAuthorizations: Array<MeetingAuthorization>;
  requireAuthorization: boolean;
}

class EUCPlugins {
  onLoaded = (session: Object, theme: Object, locale: string, extra: Object | null) => {}
  onUnLoaded() {};

  // WDA
  onLogout = ()  => {}
  onCallIncoming = (call: Call) =>  {}
  onCallMade = (call: Call) => {}
  onCallAnswered = (call: Call) => {}
  onCallHangedUp = (call: Call) => {}
  onUnHandledEvent = (event: MessageEvent) => {}
  onWebsocketMessage = (message: MessageEvent) => {}
  onMeetingCreated = (meeting: Meeting) => {}
  onRouteChanged = (location: Object, action: string) => {}

  // Portal
  onConnectedToStack = (stackSession: Object) => {}
  onSwitchTenant = (uuid: string, name: string) => {}

  initialize() {
    window.onunload = this.onUnLoaded;
    window.addEventListener('message', this._onMessage, false);
  }

  startCall({ targets , requestedModalities = ['audio'] }: { targets: string[], requestedModalities: string[] }) {
    this._sendMessage(EVENT_START_CALL, { targets, requestedModalities });
  }

  openLink(url: string) {
    this._sendMessage(EVENT_OPEN_LINK, { url });
  }

  createMeeting(name: string, requireAuthorization = false, persistent = false) {
    this._sendMessage(EVENT_CREATE_MEETING, { name, requireAuthorization, persistent });
  }

  openMeetingLobby(number: string) {
    this._sendMessage(EVENT_OPEN_MEETING_LOBBY, { number });
  }

  openSettings() {
    this._sendMessage(EVENT_OPEN_SETTINGS);
  }

  _onMessage = (event: MessageEvent) => {
    if (!event.data) {
      return;
    }

    switch (event.data.type) {
      // WDA
      case EVENT_ON_LOADED:
        this.onLoaded(event.data.session, event.data.theme, event.data.locale, event.data.extra);
        break;
      case EVENT_WS_MESSAGE:
        this.onWebsocketMessage(event.data.message);
        break;
      case EVENT_ON_MEETING_CREATED:
        this.onMeetingCreated(event.data.meeting);
        break;
      case EVENT_ROUTE_CHANGE:
        this.onRouteChanged(event.data.location, event.data.action);
        break;
      case EVENT_ON_CALL_INCOMING:
        this.onCallIncoming(event.data.call);
        break;
      case EVENT_ON_CALL_MADE:
        this.onCallMade(event.data.call);
        break;
      case EVENT_ON_CALL_ANSWERED:
        this.onCallAnswered(event.data.call);
        break;
      case EVENT_ON_CALL_HANGED_UP:
        this.onCallHangedUp(event.data.call);
        break;
      case EVENT_ON_LOGOUT:
        this.onLogout();
        break;

      // Portal
      case EVENT_ON_CONNECTED_TO_STACK:
        this.onConnectedToStack(event.data.stackSession);
        break;

      case EVENT_ON_SWITCH_STACK_TENANT:
        this.onSwitchTenant(event.data.tenant.uuid, event.data.tenant.name);
        break;

      default:
        this.onUnHandledEvent(event);
        break;
    }
  }

  closeLeftPanel() {
    this._sendMessage(EVENT_CLOSE_LEFT_PANEL);
  }

  openLeftPanel() {
    this._sendMessage(EVENT_OPEN_LEFT_PANEL);
  }

  _sendMessage = (type: string, payload = {}) => {
    window.parent.postMessage({ type, ...payload }, '*');
  }
}

export default EUCPlugins;
