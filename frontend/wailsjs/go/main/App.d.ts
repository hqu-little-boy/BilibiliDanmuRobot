// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {main} from '../models';
import {entity} from '../models';

export function CheckUpdate():Promise<main.VersionResponse>;

export function GetUpdateUpgrader():Promise<string>;

export function GetUserInfo():Promise<entity.UserinfoLite>;

export function GetVersion():Promise<string>;

export function Getlogin():Promise<number>;

export function GetloginStatus():Promise<boolean>;

export function Greet(arg1:string):Promise<string>;

export function Onstop():Promise<boolean>;

export function ReadConfig():Promise<main.ConfigResponse>;

export function Stopwork():Promise<void>;

export function Userlogin():Promise<entity.LoginUrl>;

export function WriteConfig(arg1:string):Promise<main.ConfigResponse>;
