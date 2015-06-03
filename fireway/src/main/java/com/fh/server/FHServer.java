package com.fh.server;

import org.apache.log4j.Logger;

/**
 * 用户服务程序
 * 
 * File: EcboxWebWwwServe.java<br/>
 * Description: <br/>
 * 
 * Copyright: Copyright (c) 2012 ecbox.com<br/>
 * Company: ECBOX,Inc.<br/>
 * 
 * @author chenxiaochun
 * @date 2013-5-31
 * @version 1.0
 */
public class FHServer {

  final static Logger logger = Logger.getLogger(FHServer.class);
  JettyDaemon jettyDaemon;

  public FHServer() {
    jettyDaemon = new JettyDaemon();
  }

  public void start() {
    try {
      jettyDaemon.start();
      System.out.println("fh startup success.");
    } catch (Exception e) {
      logger.error("web服务启动失败", e);
      System.err.println("fh startup failed.");
    }
  }

  /**
   * @param args
   */
  public static void main(String[] args) {
    FHServer serve = new FHServer();
    serve.start();
  }
}
