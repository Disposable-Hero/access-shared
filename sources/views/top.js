import {JetView, plugins} from "webix-jet";

export default class TopView extends JetView{
	config(){

		const logout = {
			view:"button", label:"Logout", width: 120,
			click: () => this.show("/logout")
		};




		const header = {
			view:"toolbar",
			css:"webix_dark", padding:{ left:8 },
			elements:[
				{ view:"label", label:this.app.config.name }
				, logout
/*wjet::Topbar*/
			]
		};

		return {
			view: "filemanager",
			id: "fm",
			mode: "cards",
			path: "/Freigabe/",
			// url: "https://docs.webix.com/filemanager-backend/"
			url: "http://dev.mind-consulting.de:3200/",
			// override: new Map([[fileManager.services.Backend, CustomBackend]]),
		};
	}

	init(){

	}
}
