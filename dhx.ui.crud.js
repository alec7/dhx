/*jslint browser: true, devel: true, eqeq: true, newcap: true, nomen: true, white: true */
/*global $dhx, dhtmlx, dhtmlXLayoutObject, dbDemo */
$dhx.ui.crud = {
	controller : {
		
	}
	,view : {
		
	}
	,settings : {
		
	}
};
$dhx.ui._cruds = [];

$dhx.ui.controller = [];
$dhx.ui.crud.simple = function( configuration ){
	try {
		
		$dhx.init();
		var that = $dhx.ui.crud, self = this, defaultView = $dhx.ui.crud.simple.View;
		
		self.base_path  = $dhx.CDN;
		self.appName = configuration.collection + '_app';
		self.database = configuration.database;
		self.version = 0.1;
		self.appId = '$dhx.ui.crud.simple.' + configuration.collection + '_app';
		self.collection = configuration.collection;
		//self.item = configuration.item;
		self.type = 'simple';
		
		self.configuration = configuration;
		self.configuration.wrapper = self.configuration.wrapper || document.body;
		
		
		if( configuration.customView )
		{
			defaultView	= configuration.customView;
		}
	
			
		$dhx.ui.crud.simple.View.settings.base_path = configuration.base_path;
		$dhx.ui.crud.simple.View.settings.application_path = $dhx.ui.crud.simple.View.settings.base_path + "dbDemo/";
		$dhx.ui.crud.simple.View.settings.icons_path = $dhx.ui.crud.simple.View.settings.application_path + "icons/";
		
		
		//self.view.settings.icons_path = $dhx.ui.crud.simple.View.settings.icons_path;
		$dhx.ui.crud.simple.View.settings.ribbon.icons_path = $dhx.ui.crud.simple.View.settings.application_path + "icons_terrace/";
		$dhx.ui.crud.simple.View.settings.menu.icons_path = $dhx.ui.crud.simple.View.settings.application_path + "icons_terrace/";
		$dhx.ui.crud.simple.View.settings.dhtmlx_codebase_path = configuration.base_path + 'codebase4.2_std/';
		
		//self.view = new $dhx.ui.crud.simple.View( self );
		//self.view.render();
		
		
		
		this.view = $dhx.extend( defaultView, {} );
		//alert( 'pushing ' + self.appId )
		$dhx.ui.controller[ self.appId ] = this;
		
		console.log( this.view );
		
		self.view.render( this );
		
		
		
		console.log( this.view );
		
	}
	catch (e) {
		if ($dhx._enable_log)  console.log(">>> error when starting component:");
		console.log(e.stack);
		if ($dhx._enable_log) console.log(">>>>>>>>>");
	}
}