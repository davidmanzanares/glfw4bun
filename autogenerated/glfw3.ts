
import { dlopen, FFIType, ptr, read } from "bun:ffi";

globalThis.ptrBufferRefs = new Set();

export const GLFW_VERSION_MAJOR = 3;
export const GLFW_VERSION_MINOR = 3;
export const GLFW_VERSION_REVISION = 2;
export const GLFW_TRUE = 1;
export const GLFW_FALSE = 0;
export const GLFW_RELEASE = 0;
export const GLFW_PRESS = 1;
export const GLFW_REPEAT = 2;
export const GLFW_HAT_CENTERED = 0;
export const GLFW_HAT_UP = 1;
export const GLFW_HAT_RIGHT = 2;
export const GLFW_HAT_DOWN = 4;
export const GLFW_HAT_LEFT = 8;
export const GLFW_KEY_UNKNOWN = -1;
export const GLFW_KEY_SPACE = 32;
export const GLFW_KEY_0 = 48;
export const GLFW_KEY_1 = 49;
export const GLFW_KEY_2 = 50;
export const GLFW_KEY_3 = 51;
export const GLFW_KEY_4 = 52;
export const GLFW_KEY_5 = 53;
export const GLFW_KEY_6 = 54;
export const GLFW_KEY_7 = 55;
export const GLFW_KEY_8 = 56;
export const GLFW_KEY_9 = 57;
export const GLFW_KEY_A = 65;
export const GLFW_KEY_B = 66;
export const GLFW_KEY_C = 67;
export const GLFW_KEY_D = 68;
export const GLFW_KEY_E = 69;
export const GLFW_KEY_F = 70;
export const GLFW_KEY_G = 71;
export const GLFW_KEY_H = 72;
export const GLFW_KEY_I = 73;
export const GLFW_KEY_J = 74;
export const GLFW_KEY_K = 75;
export const GLFW_KEY_L = 76;
export const GLFW_KEY_M = 77;
export const GLFW_KEY_N = 78;
export const GLFW_KEY_O = 79;
export const GLFW_KEY_P = 80;
export const GLFW_KEY_Q = 81;
export const GLFW_KEY_R = 82;
export const GLFW_KEY_S = 83;
export const GLFW_KEY_T = 84;
export const GLFW_KEY_U = 85;
export const GLFW_KEY_V = 86;
export const GLFW_KEY_W = 87;
export const GLFW_KEY_X = 88;
export const GLFW_KEY_Y = 89;
export const GLFW_KEY_Z = 90;
export const GLFW_KEY_ESCAPE = 256;
export const GLFW_KEY_ENTER = 257;
export const GLFW_KEY_TAB = 258;
export const GLFW_KEY_BACKSPACE = 259;
export const GLFW_KEY_INSERT = 260;
export const GLFW_KEY_DELETE = 261;
export const GLFW_KEY_RIGHT = 262;
export const GLFW_KEY_LEFT = 263;
export const GLFW_KEY_DOWN = 264;
export const GLFW_KEY_UP = 265;
export const GLFW_KEY_PAGE_UP = 266;
export const GLFW_KEY_PAGE_DOWN = 267;
export const GLFW_KEY_HOME = 268;
export const GLFW_KEY_END = 269;
export const GLFW_KEY_CAPS_LOCK = 280;
export const GLFW_KEY_SCROLL_LOCK = 281;
export const GLFW_KEY_NUM_LOCK = 282;
export const GLFW_KEY_PRINT_SCREEN = 283;
export const GLFW_KEY_PAUSE = 284;
export const GLFW_KEY_F1 = 290;
export const GLFW_KEY_F2 = 291;
export const GLFW_KEY_F3 = 292;
export const GLFW_KEY_F4 = 293;
export const GLFW_KEY_F5 = 294;
export const GLFW_KEY_F6 = 295;
export const GLFW_KEY_F7 = 296;
export const GLFW_KEY_F8 = 297;
export const GLFW_KEY_F9 = 298;
export const GLFW_KEY_F10 = 299;
export const GLFW_KEY_F11 = 300;
export const GLFW_KEY_F12 = 301;
export const GLFW_KEY_F13 = 302;
export const GLFW_KEY_F14 = 303;
export const GLFW_KEY_F15 = 304;
export const GLFW_KEY_F16 = 305;
export const GLFW_KEY_F17 = 306;
export const GLFW_KEY_F18 = 307;
export const GLFW_KEY_F19 = 308;
export const GLFW_KEY_F20 = 309;
export const GLFW_KEY_F21 = 310;
export const GLFW_KEY_F22 = 311;
export const GLFW_KEY_F23 = 312;
export const GLFW_KEY_F24 = 313;
export const GLFW_KEY_F25 = 314;
export const GLFW_KEY_KP_0 = 320;
export const GLFW_KEY_KP_1 = 321;
export const GLFW_KEY_KP_2 = 322;
export const GLFW_KEY_KP_3 = 323;
export const GLFW_KEY_KP_4 = 324;
export const GLFW_KEY_KP_5 = 325;
export const GLFW_KEY_KP_6 = 326;
export const GLFW_KEY_KP_7 = 327;
export const GLFW_KEY_KP_8 = 328;
export const GLFW_KEY_KP_9 = 329;
export const GLFW_KEY_KP_DECIMAL = 330;
export const GLFW_KEY_KP_DIVIDE = 331;
export const GLFW_KEY_KP_MULTIPLY = 332;
export const GLFW_KEY_KP_SUBTRACT = 333;
export const GLFW_KEY_KP_ADD = 334;
export const GLFW_KEY_KP_ENTER = 335;
export const GLFW_KEY_KP_EQUAL = 336;
export const GLFW_KEY_LEFT_SHIFT = 340;
export const GLFW_KEY_LEFT_CONTROL = 341;
export const GLFW_KEY_LEFT_ALT = 342;
export const GLFW_KEY_LEFT_SUPER = 343;
export const GLFW_KEY_RIGHT_SHIFT = 344;
export const GLFW_KEY_RIGHT_CONTROL = 345;
export const GLFW_KEY_RIGHT_ALT = 346;
export const GLFW_KEY_RIGHT_SUPER = 347;
export const GLFW_KEY_MENU = 348;
export const GLFW_MOD_SHIFT = 1;
export const GLFW_MOD_CONTROL = 2;
export const GLFW_MOD_ALT = 4;
export const GLFW_MOD_SUPER = 8;
export const GLFW_MOD_CAPS_LOCK = 16;
export const GLFW_MOD_NUM_LOCK = 32;
export const GLFW_MOUSE_BUTTON_1 = 0;
export const GLFW_MOUSE_BUTTON_2 = 1;
export const GLFW_MOUSE_BUTTON_3 = 2;
export const GLFW_MOUSE_BUTTON_4 = 3;
export const GLFW_MOUSE_BUTTON_5 = 4;
export const GLFW_MOUSE_BUTTON_6 = 5;
export const GLFW_MOUSE_BUTTON_7 = 6;
export const GLFW_MOUSE_BUTTON_8 = 7;
export const GLFW_JOYSTICK_1 = 0;
export const GLFW_JOYSTICK_2 = 1;
export const GLFW_JOYSTICK_3 = 2;
export const GLFW_JOYSTICK_4 = 3;
export const GLFW_JOYSTICK_5 = 4;
export const GLFW_JOYSTICK_6 = 5;
export const GLFW_JOYSTICK_7 = 6;
export const GLFW_JOYSTICK_8 = 7;
export const GLFW_JOYSTICK_9 = 8;
export const GLFW_JOYSTICK_10 = 9;
export const GLFW_JOYSTICK_11 = 10;
export const GLFW_JOYSTICK_12 = 11;
export const GLFW_JOYSTICK_13 = 12;
export const GLFW_JOYSTICK_14 = 13;
export const GLFW_JOYSTICK_15 = 14;
export const GLFW_JOYSTICK_16 = 15;
export const GLFW_GAMEPAD_BUTTON_A = 0;
export const GLFW_GAMEPAD_BUTTON_B = 1;
export const GLFW_GAMEPAD_BUTTON_X = 2;
export const GLFW_GAMEPAD_BUTTON_Y = 3;
export const GLFW_GAMEPAD_BUTTON_LEFT_BUMPER = 4;
export const GLFW_GAMEPAD_BUTTON_RIGHT_BUMPER = 5;
export const GLFW_GAMEPAD_BUTTON_BACK = 6;
export const GLFW_GAMEPAD_BUTTON_START = 7;
export const GLFW_GAMEPAD_BUTTON_GUIDE = 8;
export const GLFW_GAMEPAD_BUTTON_LEFT_THUMB = 9;
export const GLFW_GAMEPAD_BUTTON_RIGHT_THUMB = 10;
export const GLFW_GAMEPAD_BUTTON_DPAD_UP = 11;
export const GLFW_GAMEPAD_BUTTON_DPAD_RIGHT = 12;
export const GLFW_GAMEPAD_BUTTON_DPAD_DOWN = 13;
export const GLFW_GAMEPAD_BUTTON_DPAD_LEFT = 14;
export const GLFW_GAMEPAD_AXIS_LEFT_X = 0;
export const GLFW_GAMEPAD_AXIS_LEFT_Y = 1;
export const GLFW_GAMEPAD_AXIS_RIGHT_X = 2;
export const GLFW_GAMEPAD_AXIS_RIGHT_Y = 3;
export const GLFW_GAMEPAD_AXIS_LEFT_TRIGGER = 4;
export const GLFW_GAMEPAD_AXIS_RIGHT_TRIGGER = 5;
export const GLFW_NO_ERROR = 0;
export const GLFW_NOT_INITIALIZED = 65537;
export const GLFW_NO_CURRENT_CONTEXT = 65538;
export const GLFW_INVALID_ENUM = 65539;
export const GLFW_INVALID_VALUE = 65540;
export const GLFW_OUT_OF_MEMORY = 65541;
export const GLFW_API_UNAVAILABLE = 65542;
export const GLFW_VERSION_UNAVAILABLE = 65543;
export const GLFW_PLATFORM_ERROR = 65544;
export const GLFW_FORMAT_UNAVAILABLE = 65545;
export const GLFW_NO_WINDOW_CONTEXT = 65546;
export const GLFW_FOCUSED = 131073;
export const GLFW_ICONIFIED = 131074;
export const GLFW_RESIZABLE = 131075;
export const GLFW_VISIBLE = 131076;
export const GLFW_DECORATED = 131077;
export const GLFW_AUTO_ICONIFY = 131078;
export const GLFW_FLOATING = 131079;
export const GLFW_MAXIMIZED = 131080;
export const GLFW_CENTER_CURSOR = 131081;
export const GLFW_TRANSPARENT_FRAMEBUFFER = 131082;
export const GLFW_HOVERED = 131083;
export const GLFW_FOCUS_ON_SHOW = 131084;
export const GLFW_RED_BITS = 135169;
export const GLFW_GREEN_BITS = 135170;
export const GLFW_BLUE_BITS = 135171;
export const GLFW_ALPHA_BITS = 135172;
export const GLFW_DEPTH_BITS = 135173;
export const GLFW_STENCIL_BITS = 135174;
export const GLFW_ACCUM_RED_BITS = 135175;
export const GLFW_ACCUM_GREEN_BITS = 135176;
export const GLFW_ACCUM_BLUE_BITS = 135177;
export const GLFW_ACCUM_ALPHA_BITS = 135178;
export const GLFW_AUX_BUFFERS = 135179;
export const GLFW_STEREO = 135180;
export const GLFW_SAMPLES = 135181;
export const GLFW_SRGB_CAPABLE = 135182;
export const GLFW_REFRESH_RATE = 135183;
export const GLFW_DOUBLEBUFFER = 135184;
export const GLFW_CLIENT_API = 139265;
export const GLFW_CONTEXT_VERSION_MAJOR = 139266;
export const GLFW_CONTEXT_VERSION_MINOR = 139267;
export const GLFW_CONTEXT_REVISION = 139268;
export const GLFW_CONTEXT_ROBUSTNESS = 139269;
export const GLFW_OPENGL_FORWARD_COMPAT = 139270;
export const GLFW_OPENGL_DEBUG_CONTEXT = 139271;
export const GLFW_OPENGL_PROFILE = 139272;
export const GLFW_CONTEXT_RELEASE_BEHAVIOR = 139273;
export const GLFW_CONTEXT_NO_ERROR = 139274;
export const GLFW_CONTEXT_CREATION_API = 139275;
export const GLFW_SCALE_TO_MONITOR = 139276;
export const GLFW_COCOA_RETINA_FRAMEBUFFER = 143361;
export const GLFW_COCOA_FRAME_NAME = 143362;
export const GLFW_COCOA_GRAPHICS_SWITCHING = 143363;
export const GLFW_X11_CLASS_NAME = 147457;
export const GLFW_X11_INSTANCE_NAME = 147458;
export const GLFW_NO_API = 0;
export const GLFW_OPENGL_API = 196609;
export const GLFW_OPENGL_ES_API = 196610;
export const GLFW_NO_ROBUSTNESS = 0;
export const GLFW_NO_RESET_NOTIFICATION = 200705;
export const GLFW_LOSE_CONTEXT_ON_RESET = 200706;
export const GLFW_OPENGL_ANY_PROFILE = 0;
export const GLFW_OPENGL_CORE_PROFILE = 204801;
export const GLFW_OPENGL_COMPAT_PROFILE = 204802;
export const GLFW_CURSOR = 208897;
export const GLFW_STICKY_KEYS = 208898;
export const GLFW_STICKY_MOUSE_BUTTONS = 208899;
export const GLFW_LOCK_KEY_MODS = 208900;
export const GLFW_RAW_MOUSE_MOTION = 208901;
export const GLFW_CURSOR_NORMAL = 212993;
export const GLFW_CURSOR_HIDDEN = 212994;
export const GLFW_CURSOR_DISABLED = 212995;
export const GLFW_ANY_RELEASE_BEHAVIOR = 0;
export const GLFW_RELEASE_BEHAVIOR_FLUSH = 217089;
export const GLFW_RELEASE_BEHAVIOR_NONE = 217090;
export const GLFW_NATIVE_CONTEXT_API = 221185;
export const GLFW_EGL_CONTEXT_API = 221186;
export const GLFW_OSMESA_CONTEXT_API = 221187;
export const GLFW_ARROW_CURSOR = 221185;
export const GLFW_IBEAM_CURSOR = 221186;
export const GLFW_CROSSHAIR_CURSOR = 221187;
export const GLFW_HAND_CURSOR = 221188;
export const GLFW_HRESIZE_CURSOR = 221189;
export const GLFW_VRESIZE_CURSOR = 221190;
export const GLFW_CONNECTED = 262145;
export const GLFW_DISCONNECTED = 262146;
export const GLFW_JOYSTICK_HAT_BUTTONS = 327681;
export const GLFW_COCOA_CHDIR_RESOURCES = 331777;
export const GLFW_COCOA_MENUBAR = 331778;
export const GLFW_DONT_CARE = -1;


export function GLFWvidmode_alloc_array(size){
	const buffer = new ArrayBuffer(24*size);
	return ptr(buffer);
}
export function GLFWvidmode_to_C(obj, keepRef=true){
	if (Array.isArray(obj)){
	const buffer = new ArrayBuffer(24*obj.length);
	const refList = [buffer];
	if (keepRef){  globalThis.ptrBufferRefs.add(refList);}
	const view = new DataView(buffer);
	obj.forEach((obj, i)=>{
	view.setInt32(0+(i*24), obj.width, true);
	view.setInt32(4+(i*24), obj.height, true);
	view.setInt32(8+(i*24), obj.redBits, true);
	view.setInt32(12+(i*24), obj.greenBits, true);
	view.setInt32(16+(i*24), obj.blueBits, true);
	view.setInt32(20+(i*24), obj.refreshRate, true);
	});
	return {buffer, ptr: ptr(buffer), free: ()=>{globalThis.ptrBufferRefs.delete(refList)}};
}
	const buffer = new ArrayBuffer(24);
	const refList = [buffer];
	if (keepRef){  globalThis.ptrBufferRefs.add(refList);}
	const view = new DataView(buffer);
	view.setInt32(0, obj.width, true);
	view.setInt32(4, obj.height, true);
	view.setInt32(8, obj.redBits, true);
	view.setInt32(12, obj.greenBits, true);
	view.setInt32(16, obj.blueBits, true);
	view.setInt32(20, obj.refreshRate, true);
	return {buffer, ptr: ptr(buffer), free: ()=>{globalThis.ptrBufferRefs.delete(refList)}};
}
export function GLFWvidmode_from_C(ptr){
	const obj = {
		width: null,
		height: null,
		redBits: null,
		greenBits: null,
		blueBits: null,
		refreshRate: null
	};
	return obj;
}


export function GLFWgammaramp_alloc_array(size){
	const buffer = new ArrayBuffer(32*size);
	return ptr(buffer);
}
export function GLFWgammaramp_to_C(obj, keepRef=true){
	if (Array.isArray(obj)){
	const buffer = new ArrayBuffer(32*obj.length);
	const refList = [buffer];
	if (keepRef){  globalThis.ptrBufferRefs.add(refList);}
	const view = new DataView(buffer);
	obj.forEach((obj, i)=>{

	view.setBigUint64(0+(i*32), BigInt(obj.red||0), true);
	view.setBigUint64(0+(i*32), BigInt(obj.red||0), true);


	view.setBigUint64(8+(i*32), BigInt(obj.green||0), true);
	view.setBigUint64(8+(i*32), BigInt(obj.green||0), true);


	view.setBigUint64(16+(i*32), BigInt(obj.blue||0), true);
	view.setBigUint64(16+(i*32), BigInt(obj.blue||0), true);


	view.setBigUint64(24+(i*32), BigInt(obj.size||0), true);
	view.setBigUint64(24+(i*32), BigInt(obj.size||0), true);

	});
	return {buffer, ptr: ptr(buffer), free: ()=>{globalThis.ptrBufferRefs.delete(refList)}};
}
	const buffer = new ArrayBuffer(32);
	const refList = [buffer];
	if (keepRef){  globalThis.ptrBufferRefs.add(refList);}
	const view = new DataView(buffer);

	view.setBigUint64(0, BigInt(obj.red||0), true);
	view.setBigUint64(0, BigInt(obj.red||0), true);


	view.setBigUint64(8, BigInt(obj.green||0), true);
	view.setBigUint64(8, BigInt(obj.green||0), true);


	view.setBigUint64(16, BigInt(obj.blue||0), true);
	view.setBigUint64(16, BigInt(obj.blue||0), true);


	view.setBigUint64(24, BigInt(obj.size||0), true);
	view.setBigUint64(24, BigInt(obj.size||0), true);

	return {buffer, ptr: ptr(buffer), free: ()=>{globalThis.ptrBufferRefs.delete(refList)}};
}
export function GLFWgammaramp_from_C(ptr){
	const obj = {
		red: read.ptr(ptr),
		green: read.ptr(ptr),
		blue: read.ptr(ptr),
		size: undefined
	};
	return obj;
}


export function GLFWimage_alloc_array(size){
	const buffer = new ArrayBuffer(16*size);
	return ptr(buffer);
}
export function GLFWimage_to_C(obj, keepRef=true){
	if (Array.isArray(obj)){
	const buffer = new ArrayBuffer(16*obj.length);
	const refList = [buffer];
	if (keepRef){  globalThis.ptrBufferRefs.add(refList);}
	const view = new DataView(buffer);
	obj.forEach((obj, i)=>{
	view.setInt32(0+(i*16), obj.width, true);
	view.setInt32(4+(i*16), obj.height, true);

	view.setBigUint64(8+(i*16), BigInt(obj.pixels||0), true);
	view.setBigUint64(8+(i*16), BigInt(obj.pixels||0), true);

	});
	return {buffer, ptr: ptr(buffer), free: ()=>{globalThis.ptrBufferRefs.delete(refList)}};
}
	const buffer = new ArrayBuffer(16);
	const refList = [buffer];
	if (keepRef){  globalThis.ptrBufferRefs.add(refList);}
	const view = new DataView(buffer);
	view.setInt32(0, obj.width, true);
	view.setInt32(4, obj.height, true);

	view.setBigUint64(8, BigInt(obj.pixels||0), true);
	view.setBigUint64(8, BigInt(obj.pixels||0), true);

	return {buffer, ptr: ptr(buffer), free: ()=>{globalThis.ptrBufferRefs.delete(refList)}};
}
export function GLFWimage_from_C(ptr){
	const obj = {
		width: null,
		height: null,
		pixels: read.ptr(ptr)
	};
	return obj;
}


export function GLFWgamepadstate_alloc_array(size){
	const buffer = new ArrayBuffer(16*size);
	return ptr(buffer);
}
export function GLFWgamepadstate_to_C(obj, keepRef=true){
	if (Array.isArray(obj)){
	const buffer = new ArrayBuffer(16*obj.length);
	const refList = [buffer];
	if (keepRef){  globalThis.ptrBufferRefs.add(refList);}
	const view = new DataView(buffer);
	obj.forEach((obj, i)=>{


	});
	return {buffer, ptr: ptr(buffer), free: ()=>{globalThis.ptrBufferRefs.delete(refList)}};
}
	const buffer = new ArrayBuffer(16);
	const refList = [buffer];
	if (keepRef){  globalThis.ptrBufferRefs.add(refList);}
	const view = new DataView(buffer);


	return {buffer, ptr: ptr(buffer), free: ()=>{globalThis.ptrBufferRefs.delete(refList)}};
}
export function GLFWgamepadstate_from_C(ptr){
	const obj = {
		buttons: null,
		axes: null
	};
	return obj;
}




let __symbol_fn_glfwInit = null;
export function glfwInit(){
  let fn = __symbol_fn_glfwInit;
  if (fn === null){
    __symbol_fn_glfwInit = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwInit: {
      args: [],
      	returns: FFIType.i32
    }}).symbols.glfwInit;
    fn = __symbol_fn_glfwInit;
  }
  
  const ___ret =  fn();
  
  return ___ret;
}
  
let __symbol_fn_glfwTerminate = null;
export function glfwTerminate(){
  let fn = __symbol_fn_glfwTerminate;
  if (fn === null){
    __symbol_fn_glfwTerminate = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwTerminate: {
      args: [],
      	returns: FFIType.u64
    }}).symbols.glfwTerminate;
    fn = __symbol_fn_glfwTerminate;
  }
  
  const ___ret =  fn();
  
  return ___ret;
}
  
let __symbol_fn_glfwInitHint = null;
export function glfwInitHint(hint_, value_){
  let fn = __symbol_fn_glfwInitHint;
  if (fn === null){
    __symbol_fn_glfwInitHint = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwInitHint: {
      args: [FFIType.i32,FFIType.i32],
      	returns: FFIType.u64
    }}).symbols.glfwInitHint;
    fn = __symbol_fn_glfwInitHint;
  }
  
  const ___ret =  fn(hint_, value_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetVersion = null;
export function glfwGetVersion(major_, minor_, rev_){
  let fn = __symbol_fn_glfwGetVersion;
  if (fn === null){
    __symbol_fn_glfwGetVersion = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetVersion: {
      args: [FFIType.ptr,FFIType.ptr,FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwGetVersion;
    fn = __symbol_fn_glfwGetVersion;
  }
  
  const ___ret =  fn(major_, minor_, rev_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetVersionString = null;
export function glfwGetVersionString(){
  let fn = __symbol_fn_glfwGetVersionString;
  if (fn === null){
    __symbol_fn_glfwGetVersionString = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetVersionString: {
      args: [],
      	returns: FFIType.ptr
    }}).symbols.glfwGetVersionString;
    fn = __symbol_fn_glfwGetVersionString;
  }
  
  const ___ret =  fn();
  
  return ___ret;
}
  
let __symbol_fn_glfwGetError = null;
export function glfwGetError(description_){
  let fn = __symbol_fn_glfwGetError;
  if (fn === null){
    __symbol_fn_glfwGetError = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetError: {
      args: [FFIType.ptr],
      	returns: FFIType.i32
    }}).symbols.glfwGetError;
    fn = __symbol_fn_glfwGetError;
  }
  
  const ___ret =  fn(description_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetErrorCallback = null;
export function glfwSetErrorCallback(callback_){
  let fn = __symbol_fn_glfwSetErrorCallback;
  if (fn === null){
    __symbol_fn_glfwSetErrorCallback = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetErrorCallback: {
      args: [FFIType.u64],
      	returns: FFIType.u64
    }}).symbols.glfwSetErrorCallback;
    fn = __symbol_fn_glfwSetErrorCallback;
  }
  
  const ___ret =  fn(callback_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetMonitors = null;
export function glfwGetMonitors(count_){
  let fn = __symbol_fn_glfwGetMonitors;
  if (fn === null){
    __symbol_fn_glfwGetMonitors = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetMonitors: {
      args: [FFIType.ptr],
      	returns: FFIType.ptr
    }}).symbols.glfwGetMonitors;
    fn = __symbol_fn_glfwGetMonitors;
  }
  
  const ___ret =  fn(count_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetPrimaryMonitor = null;
export function glfwGetPrimaryMonitor(){
  let fn = __symbol_fn_glfwGetPrimaryMonitor;
  if (fn === null){
    __symbol_fn_glfwGetPrimaryMonitor = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetPrimaryMonitor: {
      args: [],
      	returns: FFIType.ptr
    }}).symbols.glfwGetPrimaryMonitor;
    fn = __symbol_fn_glfwGetPrimaryMonitor;
  }
  
  const ___ret =  fn();
  
  return ___ret;
}
  
let __symbol_fn_glfwGetMonitorPos = null;
export function glfwGetMonitorPos(monitor_, xpos_, ypos_){
  let fn = __symbol_fn_glfwGetMonitorPos;
  if (fn === null){
    __symbol_fn_glfwGetMonitorPos = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetMonitorPos: {
      args: [FFIType.ptr,FFIType.ptr,FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwGetMonitorPos;
    fn = __symbol_fn_glfwGetMonitorPos;
  }
  
  const ___ret =  fn(monitor_, xpos_, ypos_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetMonitorWorkarea = null;
export function glfwGetMonitorWorkarea(monitor_, xpos_, ypos_, width_, height_){
  let fn = __symbol_fn_glfwGetMonitorWorkarea;
  if (fn === null){
    __symbol_fn_glfwGetMonitorWorkarea = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetMonitorWorkarea: {
      args: [FFIType.ptr,FFIType.ptr,FFIType.ptr,FFIType.ptr,FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwGetMonitorWorkarea;
    fn = __symbol_fn_glfwGetMonitorWorkarea;
  }
  
  const ___ret =  fn(monitor_, xpos_, ypos_, width_, height_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetMonitorPhysicalSize = null;
export function glfwGetMonitorPhysicalSize(monitor_, widthMM_, heightMM_){
  let fn = __symbol_fn_glfwGetMonitorPhysicalSize;
  if (fn === null){
    __symbol_fn_glfwGetMonitorPhysicalSize = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetMonitorPhysicalSize: {
      args: [FFIType.ptr,FFIType.ptr,FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwGetMonitorPhysicalSize;
    fn = __symbol_fn_glfwGetMonitorPhysicalSize;
  }
  
  const ___ret =  fn(monitor_, widthMM_, heightMM_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetMonitorContentScale = null;
export function glfwGetMonitorContentScale(monitor_, xscale_, yscale_){
  let fn = __symbol_fn_glfwGetMonitorContentScale;
  if (fn === null){
    __symbol_fn_glfwGetMonitorContentScale = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetMonitorContentScale: {
      args: [FFIType.ptr,FFIType.ptr,FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwGetMonitorContentScale;
    fn = __symbol_fn_glfwGetMonitorContentScale;
  }
  
  const ___ret =  fn(monitor_, xscale_, yscale_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetMonitorName = null;
export function glfwGetMonitorName(monitor_){
  let fn = __symbol_fn_glfwGetMonitorName;
  if (fn === null){
    __symbol_fn_glfwGetMonitorName = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetMonitorName: {
      args: [FFIType.ptr],
      	returns: FFIType.ptr
    }}).symbols.glfwGetMonitorName;
    fn = __symbol_fn_glfwGetMonitorName;
  }
  
  const ___ret =  fn(monitor_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetMonitorUserPointer = null;
export function glfwSetMonitorUserPointer(monitor_, pointer_){
  let fn = __symbol_fn_glfwSetMonitorUserPointer;
  if (fn === null){
    __symbol_fn_glfwSetMonitorUserPointer = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetMonitorUserPointer: {
      args: [FFIType.ptr,FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwSetMonitorUserPointer;
    fn = __symbol_fn_glfwSetMonitorUserPointer;
  }
  
  const ___ret =  fn(monitor_, pointer_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetMonitorUserPointer = null;
export function glfwGetMonitorUserPointer(monitor_){
  let fn = __symbol_fn_glfwGetMonitorUserPointer;
  if (fn === null){
    __symbol_fn_glfwGetMonitorUserPointer = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetMonitorUserPointer: {
      args: [FFIType.ptr],
      	returns: FFIType.ptr
    }}).symbols.glfwGetMonitorUserPointer;
    fn = __symbol_fn_glfwGetMonitorUserPointer;
  }
  
  const ___ret =  fn(monitor_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetMonitorCallback = null;
export function glfwSetMonitorCallback(callback_){
  let fn = __symbol_fn_glfwSetMonitorCallback;
  if (fn === null){
    __symbol_fn_glfwSetMonitorCallback = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetMonitorCallback: {
      args: [FFIType.u64],
      	returns: FFIType.u64
    }}).symbols.glfwSetMonitorCallback;
    fn = __symbol_fn_glfwSetMonitorCallback;
  }
  
  const ___ret =  fn(callback_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetVideoModes = null;
export function glfwGetVideoModes(monitor_, count_){
  let fn = __symbol_fn_glfwGetVideoModes;
  if (fn === null){
    __symbol_fn_glfwGetVideoModes = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetVideoModes: {
      args: [FFIType.ptr,FFIType.ptr],
      	returns: FFIType.ptr
    }}).symbols.glfwGetVideoModes;
    fn = __symbol_fn_glfwGetVideoModes;
  }
  
  const ___ret =  fn(monitor_, count_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetVideoMode = null;
export function glfwGetVideoMode(monitor_){
  let fn = __symbol_fn_glfwGetVideoMode;
  if (fn === null){
    __symbol_fn_glfwGetVideoMode = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetVideoMode: {
      args: [FFIType.ptr],
      	returns: FFIType.ptr
    }}).symbols.glfwGetVideoMode;
    fn = __symbol_fn_glfwGetVideoMode;
  }
  
  const ___ret =  fn(monitor_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetGamma = null;
export function glfwSetGamma(monitor_, gamma_){
  let fn = __symbol_fn_glfwSetGamma;
  if (fn === null){
    __symbol_fn_glfwSetGamma = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetGamma: {
      args: [FFIType.ptr,FFIType.f32],
      	returns: FFIType.u64
    }}).symbols.glfwSetGamma;
    fn = __symbol_fn_glfwSetGamma;
  }
  
  const ___ret =  fn(monitor_, gamma_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetGammaRamp = null;
export function glfwGetGammaRamp(monitor_){
  let fn = __symbol_fn_glfwGetGammaRamp;
  if (fn === null){
    __symbol_fn_glfwGetGammaRamp = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetGammaRamp: {
      args: [FFIType.ptr],
      	returns: FFIType.ptr
    }}).symbols.glfwGetGammaRamp;
    fn = __symbol_fn_glfwGetGammaRamp;
  }
  
  const ___ret =  fn(monitor_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetGammaRamp = null;
export function glfwSetGammaRamp(monitor_, ramp_){
  let fn = __symbol_fn_glfwSetGammaRamp;
  if (fn === null){
    __symbol_fn_glfwSetGammaRamp = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetGammaRamp: {
      args: [FFIType.ptr,FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwSetGammaRamp;
    fn = __symbol_fn_glfwSetGammaRamp;
  }
  
        let ramp__buffer = null
        if (ramp_ !== null && typeof ramp_ === 'object'){
          ramp__buffer = GLFWgammaramp_to_C(ramp_ );
          ramp_ = ramp__buffer.ptr;
}
  const ___ret =  fn(monitor_, ramp_);
  
      ramp__buffer && ramp__buffer.free()
      
  return ___ret;
}
  
let __symbol_fn_glfwDefaultWindowHints = null;
export function glfwDefaultWindowHints(){
  let fn = __symbol_fn_glfwDefaultWindowHints;
  if (fn === null){
    __symbol_fn_glfwDefaultWindowHints = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwDefaultWindowHints: {
      args: [],
      	returns: FFIType.u64
    }}).symbols.glfwDefaultWindowHints;
    fn = __symbol_fn_glfwDefaultWindowHints;
  }
  
  const ___ret =  fn();
  
  return ___ret;
}
  
let __symbol_fn_glfwWindowHint = null;
export function glfwWindowHint(hint_, value_){
  let fn = __symbol_fn_glfwWindowHint;
  if (fn === null){
    __symbol_fn_glfwWindowHint = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwWindowHint: {
      args: [FFIType.i32,FFIType.i32],
      	returns: FFIType.u64
    }}).symbols.glfwWindowHint;
    fn = __symbol_fn_glfwWindowHint;
  }
  
  const ___ret =  fn(hint_, value_);
  
  return ___ret;
}
  
let __symbol_fn_glfwWindowHintString = null;
export function glfwWindowHintString(hint_, value_){
  let fn = __symbol_fn_glfwWindowHintString;
  if (fn === null){
    __symbol_fn_glfwWindowHintString = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwWindowHintString: {
      args: [FFIType.i32,FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwWindowHintString;
    fn = __symbol_fn_glfwWindowHintString;
  }
  
  const ___ret =  fn(hint_, value_);
  
  return ___ret;
}
  
let __symbol_fn_glfwCreateWindow = null;
export function glfwCreateWindow(width_, height_, title_, monitor_, share_){
  let fn = __symbol_fn_glfwCreateWindow;
  if (fn === null){
    __symbol_fn_glfwCreateWindow = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwCreateWindow: {
      args: [FFIType.i32,FFIType.i32,FFIType.ptr,FFIType.ptr,FFIType.ptr],
      	returns: FFIType.ptr
    }}).symbols.glfwCreateWindow;
    fn = __symbol_fn_glfwCreateWindow;
  }
  
  const ___ret =  fn(width_, height_, title_, monitor_, share_);
  
  return ___ret;
}
  
let __symbol_fn_glfwDestroyWindow = null;
export function glfwDestroyWindow(window_){
  let fn = __symbol_fn_glfwDestroyWindow;
  if (fn === null){
    __symbol_fn_glfwDestroyWindow = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwDestroyWindow: {
      args: [FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwDestroyWindow;
    fn = __symbol_fn_glfwDestroyWindow;
  }
  
  const ___ret =  fn(window_);
  
  return ___ret;
}
  
let __symbol_fn_glfwWindowShouldClose = null;
export function glfwWindowShouldClose(window_){
  let fn = __symbol_fn_glfwWindowShouldClose;
  if (fn === null){
    __symbol_fn_glfwWindowShouldClose = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwWindowShouldClose: {
      args: [FFIType.ptr],
      	returns: FFIType.i32
    }}).symbols.glfwWindowShouldClose;
    fn = __symbol_fn_glfwWindowShouldClose;
  }
  
  const ___ret =  fn(window_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetWindowShouldClose = null;
export function glfwSetWindowShouldClose(window_, value_){
  let fn = __symbol_fn_glfwSetWindowShouldClose;
  if (fn === null){
    __symbol_fn_glfwSetWindowShouldClose = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetWindowShouldClose: {
      args: [FFIType.ptr,FFIType.i32],
      	returns: FFIType.u64
    }}).symbols.glfwSetWindowShouldClose;
    fn = __symbol_fn_glfwSetWindowShouldClose;
  }
  
  const ___ret =  fn(window_, value_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetWindowTitle = null;
export function glfwSetWindowTitle(window_, title_){
  let fn = __symbol_fn_glfwSetWindowTitle;
  if (fn === null){
    __symbol_fn_glfwSetWindowTitle = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetWindowTitle: {
      args: [FFIType.ptr,FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwSetWindowTitle;
    fn = __symbol_fn_glfwSetWindowTitle;
  }
  
  const ___ret =  fn(window_, title_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetWindowIcon = null;
export function glfwSetWindowIcon(window_, count_, images_){
  let fn = __symbol_fn_glfwSetWindowIcon;
  if (fn === null){
    __symbol_fn_glfwSetWindowIcon = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetWindowIcon: {
      args: [FFIType.ptr,FFIType.i32,FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwSetWindowIcon;
    fn = __symbol_fn_glfwSetWindowIcon;
  }
  
        let images__buffer = null
        if (images_ !== null && typeof images_ === 'object'){
          images__buffer = GLFWimage_to_C(images_ );
          images_ = images__buffer.ptr;
}
  const ___ret =  fn(window_, count_, images_);
  
      images__buffer && images__buffer.free()
      
  return ___ret;
}
  
let __symbol_fn_glfwGetWindowPos = null;
export function glfwGetWindowPos(window_, xpos_, ypos_){
  let fn = __symbol_fn_glfwGetWindowPos;
  if (fn === null){
    __symbol_fn_glfwGetWindowPos = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetWindowPos: {
      args: [FFIType.ptr,FFIType.ptr,FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwGetWindowPos;
    fn = __symbol_fn_glfwGetWindowPos;
  }
  
  const ___ret =  fn(window_, xpos_, ypos_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetWindowPos = null;
export function glfwSetWindowPos(window_, xpos_, ypos_){
  let fn = __symbol_fn_glfwSetWindowPos;
  if (fn === null){
    __symbol_fn_glfwSetWindowPos = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetWindowPos: {
      args: [FFIType.ptr,FFIType.i32,FFIType.i32],
      	returns: FFIType.u64
    }}).symbols.glfwSetWindowPos;
    fn = __symbol_fn_glfwSetWindowPos;
  }
  
  const ___ret =  fn(window_, xpos_, ypos_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetWindowSize = null;
export function glfwGetWindowSize(window_, width_, height_){
  let fn = __symbol_fn_glfwGetWindowSize;
  if (fn === null){
    __symbol_fn_glfwGetWindowSize = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetWindowSize: {
      args: [FFIType.ptr,FFIType.ptr,FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwGetWindowSize;
    fn = __symbol_fn_glfwGetWindowSize;
  }
  
  const ___ret =  fn(window_, width_, height_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetWindowSizeLimits = null;
export function glfwSetWindowSizeLimits(window_, minwidth_, minheight_, maxwidth_, maxheight_){
  let fn = __symbol_fn_glfwSetWindowSizeLimits;
  if (fn === null){
    __symbol_fn_glfwSetWindowSizeLimits = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetWindowSizeLimits: {
      args: [FFIType.ptr,FFIType.i32,FFIType.i32,FFIType.i32,FFIType.i32],
      	returns: FFIType.u64
    }}).symbols.glfwSetWindowSizeLimits;
    fn = __symbol_fn_glfwSetWindowSizeLimits;
  }
  
  const ___ret =  fn(window_, minwidth_, minheight_, maxwidth_, maxheight_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetWindowAspectRatio = null;
export function glfwSetWindowAspectRatio(window_, numer_, denom_){
  let fn = __symbol_fn_glfwSetWindowAspectRatio;
  if (fn === null){
    __symbol_fn_glfwSetWindowAspectRatio = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetWindowAspectRatio: {
      args: [FFIType.ptr,FFIType.i32,FFIType.i32],
      	returns: FFIType.u64
    }}).symbols.glfwSetWindowAspectRatio;
    fn = __symbol_fn_glfwSetWindowAspectRatio;
  }
  
  const ___ret =  fn(window_, numer_, denom_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetWindowSize = null;
export function glfwSetWindowSize(window_, width_, height_){
  let fn = __symbol_fn_glfwSetWindowSize;
  if (fn === null){
    __symbol_fn_glfwSetWindowSize = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetWindowSize: {
      args: [FFIType.ptr,FFIType.i32,FFIType.i32],
      	returns: FFIType.u64
    }}).symbols.glfwSetWindowSize;
    fn = __symbol_fn_glfwSetWindowSize;
  }
  
  const ___ret =  fn(window_, width_, height_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetFramebufferSize = null;
export function glfwGetFramebufferSize(window_, width_, height_){
  let fn = __symbol_fn_glfwGetFramebufferSize;
  if (fn === null){
    __symbol_fn_glfwGetFramebufferSize = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetFramebufferSize: {
      args: [FFIType.ptr,FFIType.ptr,FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwGetFramebufferSize;
    fn = __symbol_fn_glfwGetFramebufferSize;
  }
  
  const ___ret =  fn(window_, width_, height_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetWindowFrameSize = null;
export function glfwGetWindowFrameSize(window_, left_, top_, right_, bottom_){
  let fn = __symbol_fn_glfwGetWindowFrameSize;
  if (fn === null){
    __symbol_fn_glfwGetWindowFrameSize = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetWindowFrameSize: {
      args: [FFIType.ptr,FFIType.ptr,FFIType.ptr,FFIType.ptr,FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwGetWindowFrameSize;
    fn = __symbol_fn_glfwGetWindowFrameSize;
  }
  
  const ___ret =  fn(window_, left_, top_, right_, bottom_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetWindowContentScale = null;
export function glfwGetWindowContentScale(window_, xscale_, yscale_){
  let fn = __symbol_fn_glfwGetWindowContentScale;
  if (fn === null){
    __symbol_fn_glfwGetWindowContentScale = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetWindowContentScale: {
      args: [FFIType.ptr,FFIType.ptr,FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwGetWindowContentScale;
    fn = __symbol_fn_glfwGetWindowContentScale;
  }
  
  const ___ret =  fn(window_, xscale_, yscale_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetWindowOpacity = null;
export function glfwGetWindowOpacity(window_){
  let fn = __symbol_fn_glfwGetWindowOpacity;
  if (fn === null){
    __symbol_fn_glfwGetWindowOpacity = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetWindowOpacity: {
      args: [FFIType.ptr],
      	returns: FFIType.f32
    }}).symbols.glfwGetWindowOpacity;
    fn = __symbol_fn_glfwGetWindowOpacity;
  }
  
  const ___ret =  fn(window_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetWindowOpacity = null;
export function glfwSetWindowOpacity(window_, opacity_){
  let fn = __symbol_fn_glfwSetWindowOpacity;
  if (fn === null){
    __symbol_fn_glfwSetWindowOpacity = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetWindowOpacity: {
      args: [FFIType.ptr,FFIType.f32],
      	returns: FFIType.u64
    }}).symbols.glfwSetWindowOpacity;
    fn = __symbol_fn_glfwSetWindowOpacity;
  }
  
  const ___ret =  fn(window_, opacity_);
  
  return ___ret;
}
  
let __symbol_fn_glfwIconifyWindow = null;
export function glfwIconifyWindow(window_){
  let fn = __symbol_fn_glfwIconifyWindow;
  if (fn === null){
    __symbol_fn_glfwIconifyWindow = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwIconifyWindow: {
      args: [FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwIconifyWindow;
    fn = __symbol_fn_glfwIconifyWindow;
  }
  
  const ___ret =  fn(window_);
  
  return ___ret;
}
  
let __symbol_fn_glfwRestoreWindow = null;
export function glfwRestoreWindow(window_){
  let fn = __symbol_fn_glfwRestoreWindow;
  if (fn === null){
    __symbol_fn_glfwRestoreWindow = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwRestoreWindow: {
      args: [FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwRestoreWindow;
    fn = __symbol_fn_glfwRestoreWindow;
  }
  
  const ___ret =  fn(window_);
  
  return ___ret;
}
  
let __symbol_fn_glfwMaximizeWindow = null;
export function glfwMaximizeWindow(window_){
  let fn = __symbol_fn_glfwMaximizeWindow;
  if (fn === null){
    __symbol_fn_glfwMaximizeWindow = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwMaximizeWindow: {
      args: [FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwMaximizeWindow;
    fn = __symbol_fn_glfwMaximizeWindow;
  }
  
  const ___ret =  fn(window_);
  
  return ___ret;
}
  
let __symbol_fn_glfwShowWindow = null;
export function glfwShowWindow(window_){
  let fn = __symbol_fn_glfwShowWindow;
  if (fn === null){
    __symbol_fn_glfwShowWindow = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwShowWindow: {
      args: [FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwShowWindow;
    fn = __symbol_fn_glfwShowWindow;
  }
  
  const ___ret =  fn(window_);
  
  return ___ret;
}
  
let __symbol_fn_glfwHideWindow = null;
export function glfwHideWindow(window_){
  let fn = __symbol_fn_glfwHideWindow;
  if (fn === null){
    __symbol_fn_glfwHideWindow = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwHideWindow: {
      args: [FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwHideWindow;
    fn = __symbol_fn_glfwHideWindow;
  }
  
  const ___ret =  fn(window_);
  
  return ___ret;
}
  
let __symbol_fn_glfwFocusWindow = null;
export function glfwFocusWindow(window_){
  let fn = __symbol_fn_glfwFocusWindow;
  if (fn === null){
    __symbol_fn_glfwFocusWindow = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwFocusWindow: {
      args: [FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwFocusWindow;
    fn = __symbol_fn_glfwFocusWindow;
  }
  
  const ___ret =  fn(window_);
  
  return ___ret;
}
  
let __symbol_fn_glfwRequestWindowAttention = null;
export function glfwRequestWindowAttention(window_){
  let fn = __symbol_fn_glfwRequestWindowAttention;
  if (fn === null){
    __symbol_fn_glfwRequestWindowAttention = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwRequestWindowAttention: {
      args: [FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwRequestWindowAttention;
    fn = __symbol_fn_glfwRequestWindowAttention;
  }
  
  const ___ret =  fn(window_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetWindowMonitor = null;
export function glfwGetWindowMonitor(window_){
  let fn = __symbol_fn_glfwGetWindowMonitor;
  if (fn === null){
    __symbol_fn_glfwGetWindowMonitor = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetWindowMonitor: {
      args: [FFIType.ptr],
      	returns: FFIType.ptr
    }}).symbols.glfwGetWindowMonitor;
    fn = __symbol_fn_glfwGetWindowMonitor;
  }
  
  const ___ret =  fn(window_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetWindowMonitor = null;
export function glfwSetWindowMonitor(window_, monitor_, xpos_, ypos_, width_, height_, refreshRate_){
  let fn = __symbol_fn_glfwSetWindowMonitor;
  if (fn === null){
    __symbol_fn_glfwSetWindowMonitor = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetWindowMonitor: {
      args: [FFIType.ptr,FFIType.ptr,FFIType.i32,FFIType.i32,FFIType.i32,FFIType.i32,FFIType.i32],
      	returns: FFIType.u64
    }}).symbols.glfwSetWindowMonitor;
    fn = __symbol_fn_glfwSetWindowMonitor;
  }
  
  const ___ret =  fn(window_, monitor_, xpos_, ypos_, width_, height_, refreshRate_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetWindowAttrib = null;
export function glfwGetWindowAttrib(window_, attrib_){
  let fn = __symbol_fn_glfwGetWindowAttrib;
  if (fn === null){
    __symbol_fn_glfwGetWindowAttrib = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetWindowAttrib: {
      args: [FFIType.ptr,FFIType.i32],
      	returns: FFIType.i32
    }}).symbols.glfwGetWindowAttrib;
    fn = __symbol_fn_glfwGetWindowAttrib;
  }
  
  const ___ret =  fn(window_, attrib_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetWindowAttrib = null;
export function glfwSetWindowAttrib(window_, attrib_, value_){
  let fn = __symbol_fn_glfwSetWindowAttrib;
  if (fn === null){
    __symbol_fn_glfwSetWindowAttrib = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetWindowAttrib: {
      args: [FFIType.ptr,FFIType.i32,FFIType.i32],
      	returns: FFIType.u64
    }}).symbols.glfwSetWindowAttrib;
    fn = __symbol_fn_glfwSetWindowAttrib;
  }
  
  const ___ret =  fn(window_, attrib_, value_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetWindowUserPointer = null;
export function glfwSetWindowUserPointer(window_, pointer_){
  let fn = __symbol_fn_glfwSetWindowUserPointer;
  if (fn === null){
    __symbol_fn_glfwSetWindowUserPointer = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetWindowUserPointer: {
      args: [FFIType.ptr,FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwSetWindowUserPointer;
    fn = __symbol_fn_glfwSetWindowUserPointer;
  }
  
  const ___ret =  fn(window_, pointer_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetWindowUserPointer = null;
export function glfwGetWindowUserPointer(window_){
  let fn = __symbol_fn_glfwGetWindowUserPointer;
  if (fn === null){
    __symbol_fn_glfwGetWindowUserPointer = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetWindowUserPointer: {
      args: [FFIType.ptr],
      	returns: FFIType.ptr
    }}).symbols.glfwGetWindowUserPointer;
    fn = __symbol_fn_glfwGetWindowUserPointer;
  }
  
  const ___ret =  fn(window_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetWindowPosCallback = null;
export function glfwSetWindowPosCallback(window_, callback_){
  let fn = __symbol_fn_glfwSetWindowPosCallback;
  if (fn === null){
    __symbol_fn_glfwSetWindowPosCallback = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetWindowPosCallback: {
      args: [FFIType.ptr,FFIType.u64],
      	returns: FFIType.u64
    }}).symbols.glfwSetWindowPosCallback;
    fn = __symbol_fn_glfwSetWindowPosCallback;
  }
  
  const ___ret =  fn(window_, callback_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetWindowSizeCallback = null;
export function glfwSetWindowSizeCallback(window_, callback_){
  let fn = __symbol_fn_glfwSetWindowSizeCallback;
  if (fn === null){
    __symbol_fn_glfwSetWindowSizeCallback = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetWindowSizeCallback: {
      args: [FFIType.ptr,FFIType.u64],
      	returns: FFIType.u64
    }}).symbols.glfwSetWindowSizeCallback;
    fn = __symbol_fn_glfwSetWindowSizeCallback;
  }
  
  const ___ret =  fn(window_, callback_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetWindowCloseCallback = null;
export function glfwSetWindowCloseCallback(window_, callback_){
  let fn = __symbol_fn_glfwSetWindowCloseCallback;
  if (fn === null){
    __symbol_fn_glfwSetWindowCloseCallback = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetWindowCloseCallback: {
      args: [FFIType.ptr,FFIType.u64],
      	returns: FFIType.u64
    }}).symbols.glfwSetWindowCloseCallback;
    fn = __symbol_fn_glfwSetWindowCloseCallback;
  }
  
  const ___ret =  fn(window_, callback_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetWindowRefreshCallback = null;
export function glfwSetWindowRefreshCallback(window_, callback_){
  let fn = __symbol_fn_glfwSetWindowRefreshCallback;
  if (fn === null){
    __symbol_fn_glfwSetWindowRefreshCallback = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetWindowRefreshCallback: {
      args: [FFIType.ptr,FFIType.u64],
      	returns: FFIType.u64
    }}).symbols.glfwSetWindowRefreshCallback;
    fn = __symbol_fn_glfwSetWindowRefreshCallback;
  }
  
  const ___ret =  fn(window_, callback_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetWindowFocusCallback = null;
export function glfwSetWindowFocusCallback(window_, callback_){
  let fn = __symbol_fn_glfwSetWindowFocusCallback;
  if (fn === null){
    __symbol_fn_glfwSetWindowFocusCallback = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetWindowFocusCallback: {
      args: [FFIType.ptr,FFIType.u64],
      	returns: FFIType.u64
    }}).symbols.glfwSetWindowFocusCallback;
    fn = __symbol_fn_glfwSetWindowFocusCallback;
  }
  
  const ___ret =  fn(window_, callback_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetWindowIconifyCallback = null;
export function glfwSetWindowIconifyCallback(window_, callback_){
  let fn = __symbol_fn_glfwSetWindowIconifyCallback;
  if (fn === null){
    __symbol_fn_glfwSetWindowIconifyCallback = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetWindowIconifyCallback: {
      args: [FFIType.ptr,FFIType.u64],
      	returns: FFIType.u64
    }}).symbols.glfwSetWindowIconifyCallback;
    fn = __symbol_fn_glfwSetWindowIconifyCallback;
  }
  
  const ___ret =  fn(window_, callback_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetWindowMaximizeCallback = null;
export function glfwSetWindowMaximizeCallback(window_, callback_){
  let fn = __symbol_fn_glfwSetWindowMaximizeCallback;
  if (fn === null){
    __symbol_fn_glfwSetWindowMaximizeCallback = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetWindowMaximizeCallback: {
      args: [FFIType.ptr,FFIType.u64],
      	returns: FFIType.u64
    }}).symbols.glfwSetWindowMaximizeCallback;
    fn = __symbol_fn_glfwSetWindowMaximizeCallback;
  }
  
  const ___ret =  fn(window_, callback_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetFramebufferSizeCallback = null;
export function glfwSetFramebufferSizeCallback(window_, callback_){
  let fn = __symbol_fn_glfwSetFramebufferSizeCallback;
  if (fn === null){
    __symbol_fn_glfwSetFramebufferSizeCallback = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetFramebufferSizeCallback: {
      args: [FFIType.ptr,FFIType.u64],
      	returns: FFIType.u64
    }}).symbols.glfwSetFramebufferSizeCallback;
    fn = __symbol_fn_glfwSetFramebufferSizeCallback;
  }
  
  const ___ret =  fn(window_, callback_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetWindowContentScaleCallback = null;
export function glfwSetWindowContentScaleCallback(window_, callback_){
  let fn = __symbol_fn_glfwSetWindowContentScaleCallback;
  if (fn === null){
    __symbol_fn_glfwSetWindowContentScaleCallback = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetWindowContentScaleCallback: {
      args: [FFIType.ptr,FFIType.u64],
      	returns: FFIType.u64
    }}).symbols.glfwSetWindowContentScaleCallback;
    fn = __symbol_fn_glfwSetWindowContentScaleCallback;
  }
  
  const ___ret =  fn(window_, callback_);
  
  return ___ret;
}
  
let __symbol_fn_glfwPollEvents = null;
export function glfwPollEvents(){
  let fn = __symbol_fn_glfwPollEvents;
  if (fn === null){
    __symbol_fn_glfwPollEvents = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwPollEvents: {
      args: [],
      	returns: FFIType.u64
    }}).symbols.glfwPollEvents;
    fn = __symbol_fn_glfwPollEvents;
  }
  
  const ___ret =  fn();
  
  return ___ret;
}
  
let __symbol_fn_glfwWaitEvents = null;
export function glfwWaitEvents(){
  let fn = __symbol_fn_glfwWaitEvents;
  if (fn === null){
    __symbol_fn_glfwWaitEvents = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwWaitEvents: {
      args: [],
      	returns: FFIType.u64
    }}).symbols.glfwWaitEvents;
    fn = __symbol_fn_glfwWaitEvents;
  }
  
  const ___ret =  fn();
  
  return ___ret;
}
  
let __symbol_fn_glfwWaitEventsTimeout = null;
export function glfwWaitEventsTimeout(timeout_){
  let fn = __symbol_fn_glfwWaitEventsTimeout;
  if (fn === null){
    __symbol_fn_glfwWaitEventsTimeout = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwWaitEventsTimeout: {
      args: [FFIType.f64],
      	returns: FFIType.u64
    }}).symbols.glfwWaitEventsTimeout;
    fn = __symbol_fn_glfwWaitEventsTimeout;
  }
  
  const ___ret =  fn(timeout_);
  
  return ___ret;
}
  
let __symbol_fn_glfwPostEmptyEvent = null;
export function glfwPostEmptyEvent(){
  let fn = __symbol_fn_glfwPostEmptyEvent;
  if (fn === null){
    __symbol_fn_glfwPostEmptyEvent = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwPostEmptyEvent: {
      args: [],
      	returns: FFIType.u64
    }}).symbols.glfwPostEmptyEvent;
    fn = __symbol_fn_glfwPostEmptyEvent;
  }
  
  const ___ret =  fn();
  
  return ___ret;
}
  
let __symbol_fn_glfwGetInputMode = null;
export function glfwGetInputMode(window_, mode_){
  let fn = __symbol_fn_glfwGetInputMode;
  if (fn === null){
    __symbol_fn_glfwGetInputMode = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetInputMode: {
      args: [FFIType.ptr,FFIType.i32],
      	returns: FFIType.i32
    }}).symbols.glfwGetInputMode;
    fn = __symbol_fn_glfwGetInputMode;
  }
  
  const ___ret =  fn(window_, mode_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetInputMode = null;
export function glfwSetInputMode(window_, mode_, value_){
  let fn = __symbol_fn_glfwSetInputMode;
  if (fn === null){
    __symbol_fn_glfwSetInputMode = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetInputMode: {
      args: [FFIType.ptr,FFIType.i32,FFIType.i32],
      	returns: FFIType.u64
    }}).symbols.glfwSetInputMode;
    fn = __symbol_fn_glfwSetInputMode;
  }
  
  const ___ret =  fn(window_, mode_, value_);
  
  return ___ret;
}
  
let __symbol_fn_glfwRawMouseMotionSupported = null;
export function glfwRawMouseMotionSupported(){
  let fn = __symbol_fn_glfwRawMouseMotionSupported;
  if (fn === null){
    __symbol_fn_glfwRawMouseMotionSupported = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwRawMouseMotionSupported: {
      args: [],
      	returns: FFIType.i32
    }}).symbols.glfwRawMouseMotionSupported;
    fn = __symbol_fn_glfwRawMouseMotionSupported;
  }
  
  const ___ret =  fn();
  
  return ___ret;
}
  
let __symbol_fn_glfwGetKeyName = null;
export function glfwGetKeyName(key_, scancode_){
  let fn = __symbol_fn_glfwGetKeyName;
  if (fn === null){
    __symbol_fn_glfwGetKeyName = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetKeyName: {
      args: [FFIType.i32,FFIType.i32],
      	returns: FFIType.ptr
    }}).symbols.glfwGetKeyName;
    fn = __symbol_fn_glfwGetKeyName;
  }
  
  const ___ret =  fn(key_, scancode_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetKeyScancode = null;
export function glfwGetKeyScancode(key_){
  let fn = __symbol_fn_glfwGetKeyScancode;
  if (fn === null){
    __symbol_fn_glfwGetKeyScancode = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetKeyScancode: {
      args: [FFIType.i32],
      	returns: FFIType.i32
    }}).symbols.glfwGetKeyScancode;
    fn = __symbol_fn_glfwGetKeyScancode;
  }
  
  const ___ret =  fn(key_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetKey = null;
export function glfwGetKey(window_, key_){
  let fn = __symbol_fn_glfwGetKey;
  if (fn === null){
    __symbol_fn_glfwGetKey = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetKey: {
      args: [FFIType.ptr,FFIType.i32],
      	returns: FFIType.i32
    }}).symbols.glfwGetKey;
    fn = __symbol_fn_glfwGetKey;
  }
  
  const ___ret =  fn(window_, key_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetMouseButton = null;
export function glfwGetMouseButton(window_, button_){
  let fn = __symbol_fn_glfwGetMouseButton;
  if (fn === null){
    __symbol_fn_glfwGetMouseButton = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetMouseButton: {
      args: [FFIType.ptr,FFIType.i32],
      	returns: FFIType.i32
    }}).symbols.glfwGetMouseButton;
    fn = __symbol_fn_glfwGetMouseButton;
  }
  
  const ___ret =  fn(window_, button_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetCursorPos = null;
export function glfwGetCursorPos(window_, xpos_, ypos_){
  let fn = __symbol_fn_glfwGetCursorPos;
  if (fn === null){
    __symbol_fn_glfwGetCursorPos = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetCursorPos: {
      args: [FFIType.ptr,FFIType.ptr,FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwGetCursorPos;
    fn = __symbol_fn_glfwGetCursorPos;
  }
  
  const ___ret =  fn(window_, xpos_, ypos_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetCursorPos = null;
export function glfwSetCursorPos(window_, xpos_, ypos_){
  let fn = __symbol_fn_glfwSetCursorPos;
  if (fn === null){
    __symbol_fn_glfwSetCursorPos = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetCursorPos: {
      args: [FFIType.ptr,FFIType.f64,FFIType.f64],
      	returns: FFIType.u64
    }}).symbols.glfwSetCursorPos;
    fn = __symbol_fn_glfwSetCursorPos;
  }
  
  const ___ret =  fn(window_, xpos_, ypos_);
  
  return ___ret;
}
  
let __symbol_fn_glfwCreateCursor = null;
export function glfwCreateCursor(image_, xhot_, yhot_){
  let fn = __symbol_fn_glfwCreateCursor;
  if (fn === null){
    __symbol_fn_glfwCreateCursor = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwCreateCursor: {
      args: [FFIType.ptr,FFIType.i32,FFIType.i32],
      	returns: FFIType.ptr
    }}).symbols.glfwCreateCursor;
    fn = __symbol_fn_glfwCreateCursor;
  }
  
        let image__buffer = null
        if (image_ !== null && typeof image_ === 'object'){
          image__buffer = GLFWimage_to_C(image_ );
          image_ = image__buffer.ptr;
}
  const ___ret =  fn(image_, xhot_, yhot_);
  
      image__buffer && image__buffer.free()
      
  return ___ret;
}
  
let __symbol_fn_glfwCreateStandardCursor = null;
export function glfwCreateStandardCursor(shape_){
  let fn = __symbol_fn_glfwCreateStandardCursor;
  if (fn === null){
    __symbol_fn_glfwCreateStandardCursor = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwCreateStandardCursor: {
      args: [FFIType.i32],
      	returns: FFIType.ptr
    }}).symbols.glfwCreateStandardCursor;
    fn = __symbol_fn_glfwCreateStandardCursor;
  }
  
  const ___ret =  fn(shape_);
  
  return ___ret;
}
  
let __symbol_fn_glfwDestroyCursor = null;
export function glfwDestroyCursor(cursor_){
  let fn = __symbol_fn_glfwDestroyCursor;
  if (fn === null){
    __symbol_fn_glfwDestroyCursor = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwDestroyCursor: {
      args: [FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwDestroyCursor;
    fn = __symbol_fn_glfwDestroyCursor;
  }
  
  const ___ret =  fn(cursor_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetCursor = null;
export function glfwSetCursor(window_, cursor_){
  let fn = __symbol_fn_glfwSetCursor;
  if (fn === null){
    __symbol_fn_glfwSetCursor = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetCursor: {
      args: [FFIType.ptr,FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwSetCursor;
    fn = __symbol_fn_glfwSetCursor;
  }
  
  const ___ret =  fn(window_, cursor_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetKeyCallback = null;
export function glfwSetKeyCallback(window_, callback_){
  let fn = __symbol_fn_glfwSetKeyCallback;
  if (fn === null){
    __symbol_fn_glfwSetKeyCallback = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetKeyCallback: {
      args: [FFIType.ptr,FFIType.u64],
      	returns: FFIType.u64
    }}).symbols.glfwSetKeyCallback;
    fn = __symbol_fn_glfwSetKeyCallback;
  }
  
  const ___ret =  fn(window_, callback_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetCharCallback = null;
export function glfwSetCharCallback(window_, callback_){
  let fn = __symbol_fn_glfwSetCharCallback;
  if (fn === null){
    __symbol_fn_glfwSetCharCallback = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetCharCallback: {
      args: [FFIType.ptr,FFIType.u64],
      	returns: FFIType.u64
    }}).symbols.glfwSetCharCallback;
    fn = __symbol_fn_glfwSetCharCallback;
  }
  
  const ___ret =  fn(window_, callback_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetCharModsCallback = null;
export function glfwSetCharModsCallback(window_, callback_){
  let fn = __symbol_fn_glfwSetCharModsCallback;
  if (fn === null){
    __symbol_fn_glfwSetCharModsCallback = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetCharModsCallback: {
      args: [FFIType.ptr,FFIType.u64],
      	returns: FFIType.u64
    }}).symbols.glfwSetCharModsCallback;
    fn = __symbol_fn_glfwSetCharModsCallback;
  }
  
  const ___ret =  fn(window_, callback_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetMouseButtonCallback = null;
export function glfwSetMouseButtonCallback(window_, callback_){
  let fn = __symbol_fn_glfwSetMouseButtonCallback;
  if (fn === null){
    __symbol_fn_glfwSetMouseButtonCallback = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetMouseButtonCallback: {
      args: [FFIType.ptr,FFIType.u64],
      	returns: FFIType.u64
    }}).symbols.glfwSetMouseButtonCallback;
    fn = __symbol_fn_glfwSetMouseButtonCallback;
  }
  
  const ___ret =  fn(window_, callback_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetCursorPosCallback = null;
export function glfwSetCursorPosCallback(window_, callback_){
  let fn = __symbol_fn_glfwSetCursorPosCallback;
  if (fn === null){
    __symbol_fn_glfwSetCursorPosCallback = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetCursorPosCallback: {
      args: [FFIType.ptr,FFIType.u64],
      	returns: FFIType.u64
    }}).symbols.glfwSetCursorPosCallback;
    fn = __symbol_fn_glfwSetCursorPosCallback;
  }
  
  const ___ret =  fn(window_, callback_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetCursorEnterCallback = null;
export function glfwSetCursorEnterCallback(window_, callback_){
  let fn = __symbol_fn_glfwSetCursorEnterCallback;
  if (fn === null){
    __symbol_fn_glfwSetCursorEnterCallback = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetCursorEnterCallback: {
      args: [FFIType.ptr,FFIType.u64],
      	returns: FFIType.u64
    }}).symbols.glfwSetCursorEnterCallback;
    fn = __symbol_fn_glfwSetCursorEnterCallback;
  }
  
  const ___ret =  fn(window_, callback_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetScrollCallback = null;
export function glfwSetScrollCallback(window_, callback_){
  let fn = __symbol_fn_glfwSetScrollCallback;
  if (fn === null){
    __symbol_fn_glfwSetScrollCallback = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetScrollCallback: {
      args: [FFIType.ptr,FFIType.u64],
      	returns: FFIType.u64
    }}).symbols.glfwSetScrollCallback;
    fn = __symbol_fn_glfwSetScrollCallback;
  }
  
  const ___ret =  fn(window_, callback_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetDropCallback = null;
export function glfwSetDropCallback(window_, callback_){
  let fn = __symbol_fn_glfwSetDropCallback;
  if (fn === null){
    __symbol_fn_glfwSetDropCallback = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetDropCallback: {
      args: [FFIType.ptr,FFIType.u64],
      	returns: FFIType.u64
    }}).symbols.glfwSetDropCallback;
    fn = __symbol_fn_glfwSetDropCallback;
  }
  
  const ___ret =  fn(window_, callback_);
  
  return ___ret;
}
  
let __symbol_fn_glfwJoystickPresent = null;
export function glfwJoystickPresent(jid_){
  let fn = __symbol_fn_glfwJoystickPresent;
  if (fn === null){
    __symbol_fn_glfwJoystickPresent = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwJoystickPresent: {
      args: [FFIType.i32],
      	returns: FFIType.i32
    }}).symbols.glfwJoystickPresent;
    fn = __symbol_fn_glfwJoystickPresent;
  }
  
  const ___ret =  fn(jid_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetJoystickAxes = null;
export function glfwGetJoystickAxes(jid_, count_){
  let fn = __symbol_fn_glfwGetJoystickAxes;
  if (fn === null){
    __symbol_fn_glfwGetJoystickAxes = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetJoystickAxes: {
      args: [FFIType.i32,FFIType.ptr],
      	returns: FFIType.ptr
    }}).symbols.glfwGetJoystickAxes;
    fn = __symbol_fn_glfwGetJoystickAxes;
  }
  
  const ___ret =  fn(jid_, count_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetJoystickButtons = null;
export function glfwGetJoystickButtons(jid_, count_){
  let fn = __symbol_fn_glfwGetJoystickButtons;
  if (fn === null){
    __symbol_fn_glfwGetJoystickButtons = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetJoystickButtons: {
      args: [FFIType.i32,FFIType.ptr],
      	returns: FFIType.ptr
    }}).symbols.glfwGetJoystickButtons;
    fn = __symbol_fn_glfwGetJoystickButtons;
  }
  
  const ___ret =  fn(jid_, count_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetJoystickHats = null;
export function glfwGetJoystickHats(jid_, count_){
  let fn = __symbol_fn_glfwGetJoystickHats;
  if (fn === null){
    __symbol_fn_glfwGetJoystickHats = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetJoystickHats: {
      args: [FFIType.i32,FFIType.ptr],
      	returns: FFIType.ptr
    }}).symbols.glfwGetJoystickHats;
    fn = __symbol_fn_glfwGetJoystickHats;
  }
  
  const ___ret =  fn(jid_, count_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetJoystickName = null;
export function glfwGetJoystickName(jid_){
  let fn = __symbol_fn_glfwGetJoystickName;
  if (fn === null){
    __symbol_fn_glfwGetJoystickName = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetJoystickName: {
      args: [FFIType.i32],
      	returns: FFIType.ptr
    }}).symbols.glfwGetJoystickName;
    fn = __symbol_fn_glfwGetJoystickName;
  }
  
  const ___ret =  fn(jid_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetJoystickGUID = null;
export function glfwGetJoystickGUID(jid_){
  let fn = __symbol_fn_glfwGetJoystickGUID;
  if (fn === null){
    __symbol_fn_glfwGetJoystickGUID = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetJoystickGUID: {
      args: [FFIType.i32],
      	returns: FFIType.ptr
    }}).symbols.glfwGetJoystickGUID;
    fn = __symbol_fn_glfwGetJoystickGUID;
  }
  
  const ___ret =  fn(jid_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetJoystickUserPointer = null;
export function glfwSetJoystickUserPointer(jid_, pointer_){
  let fn = __symbol_fn_glfwSetJoystickUserPointer;
  if (fn === null){
    __symbol_fn_glfwSetJoystickUserPointer = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetJoystickUserPointer: {
      args: [FFIType.i32,FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwSetJoystickUserPointer;
    fn = __symbol_fn_glfwSetJoystickUserPointer;
  }
  
  const ___ret =  fn(jid_, pointer_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetJoystickUserPointer = null;
export function glfwGetJoystickUserPointer(jid_){
  let fn = __symbol_fn_glfwGetJoystickUserPointer;
  if (fn === null){
    __symbol_fn_glfwGetJoystickUserPointer = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetJoystickUserPointer: {
      args: [FFIType.i32],
      	returns: FFIType.ptr
    }}).symbols.glfwGetJoystickUserPointer;
    fn = __symbol_fn_glfwGetJoystickUserPointer;
  }
  
  const ___ret =  fn(jid_);
  
  return ___ret;
}
  
let __symbol_fn_glfwJoystickIsGamepad = null;
export function glfwJoystickIsGamepad(jid_){
  let fn = __symbol_fn_glfwJoystickIsGamepad;
  if (fn === null){
    __symbol_fn_glfwJoystickIsGamepad = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwJoystickIsGamepad: {
      args: [FFIType.i32],
      	returns: FFIType.i32
    }}).symbols.glfwJoystickIsGamepad;
    fn = __symbol_fn_glfwJoystickIsGamepad;
  }
  
  const ___ret =  fn(jid_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSetJoystickCallback = null;
export function glfwSetJoystickCallback(callback_){
  let fn = __symbol_fn_glfwSetJoystickCallback;
  if (fn === null){
    __symbol_fn_glfwSetJoystickCallback = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetJoystickCallback: {
      args: [FFIType.u64],
      	returns: FFIType.u64
    }}).symbols.glfwSetJoystickCallback;
    fn = __symbol_fn_glfwSetJoystickCallback;
  }
  
  const ___ret =  fn(callback_);
  
  return ___ret;
}
  
let __symbol_fn_glfwUpdateGamepadMappings = null;
export function glfwUpdateGamepadMappings(string_){
  let fn = __symbol_fn_glfwUpdateGamepadMappings;
  if (fn === null){
    __symbol_fn_glfwUpdateGamepadMappings = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwUpdateGamepadMappings: {
      args: [FFIType.ptr],
      	returns: FFIType.i32
    }}).symbols.glfwUpdateGamepadMappings;
    fn = __symbol_fn_glfwUpdateGamepadMappings;
  }
  
  const ___ret =  fn(string_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetGamepadName = null;
export function glfwGetGamepadName(jid_){
  let fn = __symbol_fn_glfwGetGamepadName;
  if (fn === null){
    __symbol_fn_glfwGetGamepadName = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetGamepadName: {
      args: [FFIType.i32],
      	returns: FFIType.ptr
    }}).symbols.glfwGetGamepadName;
    fn = __symbol_fn_glfwGetGamepadName;
  }
  
  const ___ret =  fn(jid_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetGamepadState = null;
export function glfwGetGamepadState(jid_, state_){
  let fn = __symbol_fn_glfwGetGamepadState;
  if (fn === null){
    __symbol_fn_glfwGetGamepadState = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetGamepadState: {
      args: [FFIType.i32,FFIType.ptr],
      	returns: FFIType.i32
    }}).symbols.glfwGetGamepadState;
    fn = __symbol_fn_glfwGetGamepadState;
  }
  
        let state__buffer = null
        if (state_ !== null && typeof state_ === 'object'){
          state__buffer = GLFWgamepadstate_to_C(state_ );
          state_ = state__buffer.ptr;
}
  const ___ret =  fn(jid_, state_);
  
      state__buffer && state__buffer.free()
      
  return ___ret;
}
  
let __symbol_fn_glfwSetClipboardString = null;
export function glfwSetClipboardString(window_, string_){
  let fn = __symbol_fn_glfwSetClipboardString;
  if (fn === null){
    __symbol_fn_glfwSetClipboardString = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetClipboardString: {
      args: [FFIType.ptr,FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwSetClipboardString;
    fn = __symbol_fn_glfwSetClipboardString;
  }
  
  const ___ret =  fn(window_, string_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetClipboardString = null;
export function glfwGetClipboardString(window_){
  let fn = __symbol_fn_glfwGetClipboardString;
  if (fn === null){
    __symbol_fn_glfwGetClipboardString = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetClipboardString: {
      args: [FFIType.ptr],
      	returns: FFIType.ptr
    }}).symbols.glfwGetClipboardString;
    fn = __symbol_fn_glfwGetClipboardString;
  }
  
  const ___ret =  fn(window_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetTime = null;
export function glfwGetTime(){
  let fn = __symbol_fn_glfwGetTime;
  if (fn === null){
    __symbol_fn_glfwGetTime = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetTime: {
      args: [],
      	returns: FFIType.f64
    }}).symbols.glfwGetTime;
    fn = __symbol_fn_glfwGetTime;
  }
  
  const ___ret =  fn();
  
  return ___ret;
}
  
let __symbol_fn_glfwSetTime = null;
export function glfwSetTime(time_){
  let fn = __symbol_fn_glfwSetTime;
  if (fn === null){
    __symbol_fn_glfwSetTime = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSetTime: {
      args: [FFIType.f64],
      	returns: FFIType.u64
    }}).symbols.glfwSetTime;
    fn = __symbol_fn_glfwSetTime;
  }
  
  const ___ret =  fn(time_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetTimerValue = null;
export function glfwGetTimerValue(){
  let fn = __symbol_fn_glfwGetTimerValue;
  if (fn === null){
    __symbol_fn_glfwGetTimerValue = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetTimerValue: {
      args: [],
      	returns: FFIType.u64
    }}).symbols.glfwGetTimerValue;
    fn = __symbol_fn_glfwGetTimerValue;
  }
  
  const ___ret =  fn();
  
  return ___ret;
}
  
let __symbol_fn_glfwGetTimerFrequency = null;
export function glfwGetTimerFrequency(){
  let fn = __symbol_fn_glfwGetTimerFrequency;
  if (fn === null){
    __symbol_fn_glfwGetTimerFrequency = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetTimerFrequency: {
      args: [],
      	returns: FFIType.u64
    }}).symbols.glfwGetTimerFrequency;
    fn = __symbol_fn_glfwGetTimerFrequency;
  }
  
  const ___ret =  fn();
  
  return ___ret;
}
  
let __symbol_fn_glfwMakeContextCurrent = null;
export function glfwMakeContextCurrent(window_){
  let fn = __symbol_fn_glfwMakeContextCurrent;
  if (fn === null){
    __symbol_fn_glfwMakeContextCurrent = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwMakeContextCurrent: {
      args: [FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwMakeContextCurrent;
    fn = __symbol_fn_glfwMakeContextCurrent;
  }
  
  const ___ret =  fn(window_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetCurrentContext = null;
export function glfwGetCurrentContext(){
  let fn = __symbol_fn_glfwGetCurrentContext;
  if (fn === null){
    __symbol_fn_glfwGetCurrentContext = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetCurrentContext: {
      args: [],
      	returns: FFIType.ptr
    }}).symbols.glfwGetCurrentContext;
    fn = __symbol_fn_glfwGetCurrentContext;
  }
  
  const ___ret =  fn();
  
  return ___ret;
}
  
let __symbol_fn_glfwSwapBuffers = null;
export function glfwSwapBuffers(window_){
  let fn = __symbol_fn_glfwSwapBuffers;
  if (fn === null){
    __symbol_fn_glfwSwapBuffers = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSwapBuffers: {
      args: [FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwSwapBuffers;
    fn = __symbol_fn_glfwSwapBuffers;
  }
  
  const ___ret =  fn(window_);
  
  return ___ret;
}
  
let __symbol_fn_glfwSwapInterval = null;
export function glfwSwapInterval(interval_){
  let fn = __symbol_fn_glfwSwapInterval;
  if (fn === null){
    __symbol_fn_glfwSwapInterval = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwSwapInterval: {
      args: [FFIType.i32],
      	returns: FFIType.u64
    }}).symbols.glfwSwapInterval;
    fn = __symbol_fn_glfwSwapInterval;
  }
  
  const ___ret =  fn(interval_);
  
  return ___ret;
}
  
let __symbol_fn_glfwExtensionSupported = null;
export function glfwExtensionSupported(extension_){
  let fn = __symbol_fn_glfwExtensionSupported;
  if (fn === null){
    __symbol_fn_glfwExtensionSupported = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwExtensionSupported: {
      args: [FFIType.ptr],
      	returns: FFIType.i32
    }}).symbols.glfwExtensionSupported;
    fn = __symbol_fn_glfwExtensionSupported;
  }
  
  const ___ret =  fn(extension_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetProcAddress = null;
export function glfwGetProcAddress(procname_){
  let fn = __symbol_fn_glfwGetProcAddress;
  if (fn === null){
    __symbol_fn_glfwGetProcAddress = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetProcAddress: {
      args: [FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwGetProcAddress;
    fn = __symbol_fn_glfwGetProcAddress;
  }
  
  const ___ret =  fn(procname_);
  
  return ___ret;
}
  
let __symbol_fn_glfwVulkanSupported = null;
export function glfwVulkanSupported(){
  let fn = __symbol_fn_glfwVulkanSupported;
  if (fn === null){
    __symbol_fn_glfwVulkanSupported = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwVulkanSupported: {
      args: [],
      	returns: FFIType.i32
    }}).symbols.glfwVulkanSupported;
    fn = __symbol_fn_glfwVulkanSupported;
  }
  
  const ___ret =  fn();
  
  return ___ret;
}
  
let __symbol_fn_glfwGetRequiredInstanceExtensions = null;
export function glfwGetRequiredInstanceExtensions(count_){
  let fn = __symbol_fn_glfwGetRequiredInstanceExtensions;
  if (fn === null){
    __symbol_fn_glfwGetRequiredInstanceExtensions = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetRequiredInstanceExtensions: {
      args: [FFIType.ptr],
      	returns: FFIType.ptr
    }}).symbols.glfwGetRequiredInstanceExtensions;
    fn = __symbol_fn_glfwGetRequiredInstanceExtensions;
  }
  
  const ___ret =  fn(count_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetInstanceProcAddress = null;
export function glfwGetInstanceProcAddress(instance_, procname_){
  let fn = __symbol_fn_glfwGetInstanceProcAddress;
  if (fn === null){
    __symbol_fn_glfwGetInstanceProcAddress = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetInstanceProcAddress: {
      args: [FFIType.u64,FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwGetInstanceProcAddress;
    fn = __symbol_fn_glfwGetInstanceProcAddress;
  }
  
  const ___ret =  fn(instance_, procname_);
  
  return ___ret;
}
  
let __symbol_fn_glfwGetPhysicalDevicePresentationSupport = null;
export function glfwGetPhysicalDevicePresentationSupport(instance_, device_, queuefamily_){
  let fn = __symbol_fn_glfwGetPhysicalDevicePresentationSupport;
  if (fn === null){
    __symbol_fn_glfwGetPhysicalDevicePresentationSupport = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwGetPhysicalDevicePresentationSupport: {
      args: [FFIType.u64,FFIType.u64,FFIType.u32],
      	returns: FFIType.i32
    }}).symbols.glfwGetPhysicalDevicePresentationSupport;
    fn = __symbol_fn_glfwGetPhysicalDevicePresentationSupport;
  }
  
  const ___ret =  fn(instance_, device_, queuefamily_);
  
  return ___ret;
}
  
let __symbol_fn_glfwCreateWindowSurface = null;
export function glfwCreateWindowSurface(instance_, window_, allocator_, surface_){
  let fn = __symbol_fn_glfwCreateWindowSurface;
  if (fn === null){
    __symbol_fn_glfwCreateWindowSurface = dlopen("/usr/lib/x86_64-linux-gnu/libglfw.so.3", {glfwCreateWindowSurface: {
      args: [FFIType.u64,FFIType.ptr,FFIType.ptr,FFIType.ptr],
      	returns: FFIType.u64
    }}).symbols.glfwCreateWindowSurface;
    fn = __symbol_fn_glfwCreateWindowSurface;
  }
  
  const ___ret =  fn(instance_, window_, allocator_, surface_);
  
  return ___ret;
}
  

