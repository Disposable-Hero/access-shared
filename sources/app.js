import session from "models/session";
import {plugins} from "webix-jet";
import "./styles/app.css";
import { JetApp } from "webix-jet";

export default class App extends JetApp{
	constructor(config){
		const defaults = {
			id 		: APPNAME,
			version : VERSION,
			debug 	: !PRODUCTION,
			start 	: "/top/start"
		};

		super({ ...defaults, ...config });

		this.use(plugins.User, { model: session });
/*wjet::plugin*/
	}
}

export {App};
