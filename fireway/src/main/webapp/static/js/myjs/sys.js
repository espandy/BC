$(top.hangge());
//保存
function save(){
	
	if($("#YSYNAME").val()==""){
		$("#YSYNAME").tips({
			side:3,
            msg:'输入系统名称',
            bg:'#AE81FF',
            time:3
        });
		$("#YSYNAME").focus();
		return false;
	}

	if($("#COUNTPAGE").val()==""){
		$("#COUNTPAGE").tips({
			side:3,
            msg:'输入每页条数',
            bg:'#AE81FF',
            time:3
        });
		$("#COUNTPAGE").focus();
		return false;
	}
	
	if($("#SMTP").val()==""){
		$("#SMTP").tips({
			side:1,
            msg:'输入SMTP',
            bg:'#AE81FF',
            time:3
        });
		$("#SMTP").focus();
		return false;
	}
	
	if($("#PORT").val()==""){
		$("#PORT").tips({
			side:1,
            msg:'输入端口',
            bg:'#AE81FF',
            time:3
        });
		$("#PORT").focus();
		return false;
	}
	
	if($("#EMAIL").val()==""){
		
		$("#EMAIL").tips({
			side:3,
            msg:'输入邮箱',
            bg:'#AE81FF',
            time:3
        });
		$("#EMAIL").focus();
		return false;
	}else if(!ismail($("#EMAIL").val())){
		$("#EMAIL").tips({
			side:3,
            msg:'邮箱格式不正确',
            bg:'#AE81FF',
            time:3
        });
		$("#EMAIL").focus();
		return false;
	}

	if($("#PAW").val()==""){
		$("#PAW").tips({
			side:1,
            msg:'输入密码',
            bg:'#AE81FF',
            time:3
        });
		$("#PAW").focus();
		return false;
	}
	
	$("#Form").submit();
	$("#zhongxin").hide();
	$("#zhongxin2").show();
}

function ismail(mail){
	return(new RegExp(/^(?:[a-zA-Z0-9]+[_\-\+\.]?)*[a-zA-Z0-9]+@(?:([a-zA-Z0-9]+[_\-]?)*[a-zA-Z0-9]+\.)+([a-zA-Z]{2,})+$/).test(mail));
	}