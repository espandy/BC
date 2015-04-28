package com.fh.server;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.util.resource.Resource;
import org.eclipse.jetty.xml.XmlConfiguration;

/**
 * WEB服务器
 * 
 * File: JettyDaemon.java<br/>
 * Description: <br/>
 * 
 * Copyright: Copyright (c) 2012 ecbox.com<br/>
 * Company: ECBOX,Inc.<br/>
 * 
 * @author chenxiaochun
 * @date 2013年7月18日
 * @version 1.0
 */
public class JettyDaemon{

	private Server server;

	public void start() throws Exception {

		Resource fileserver_xml = Resource.newSystemResource("conf/jetty.xml");
		XmlConfiguration configuration = new XmlConfiguration(fileserver_xml.getInputStream());
		server = (Server) configuration.configure();
		
		server.start();
		//server.join();
	}

	public void stop() throws Exception {
      server.stop();
	}

}
