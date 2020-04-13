import {JetView} from "webix-jet";

export default class StartView extends JetView{
	config(){
		return {
			rows:[
				{
					view: "filemanager",
					id: "fm",
					url: "https://docs.webix.com/filemanager-backend/"
					// url: "http://dev.mind-consulting.de:3200/",
				}
			]
		}
	}
}