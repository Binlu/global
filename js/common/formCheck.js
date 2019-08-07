/*
	#author		lut000
	#date 		2019/08/07
	#purpose	常用表单校验
*/


!function(g){
	'use strict';

	const regex={
		emial:/[^\u4E00-\u9FA5\uF900-\uFA2D]+@[0-9a-zA-Z]+\.[a-zA-Z]{2,}$/i,						//邮箱
		idCard:/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i,			//身份证
		bankcard:/^\d{13,19}$/,											 //银行卡
		mobile:/^1\d{10}$/,											 	 //手机号
		telephoneNumber:/^(\d{3,4}\-)?\d{6,8}$/,						 //座机号
		money:/^\d+(\.\d+|\d+)?$/,									     //类金额数字
		specialWord:/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/        //表情符号
	};


	const methods={
	    isIdcard (str){                                                  //是否为身份证
	        let re=/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i;
	        return re.test(str);
	    },
	    isEmail (str){                                                  //是否为邮箱
	        let re=/[^\u4E00-\u9FA5\uF900-\uFA2D]+@[0-9a-zA-Z]+\.[a-zA-Z]{2,}$/i;
	        let reSpace=/\s/;
	        return re.test(str) && !reSpace.test(str);
	    },
	    isBankCard (str){                                               //是否为银行卡
	        let re=/^\d{13,19}$/;
	        return re.test(str);
	    },
	    isMobileNumber (str){                                           //是否为手机号
	        let re=/^1\d{10}$/;
	        return re.test(str);
	    },
	    isTelephoneNumber (str){                                        //是否为座机号
	        let re=/^(\d{3,4}\-)?\d{6,8}$/;
	        return re.test(str);
	    },
	    isMoney (str){                                                  //是否为金额数值
	        let re=/^\d+(\.\d+|\d+)?$/;
	        return re.test(str);
	    },
		hasSpecialWord (val){							//检测是否有表情包
	        let re=/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/;
	        if (re.test(val)) {
	            return true;
	        }else{
	            return false;
	        }
	    },
	    isSpaceVal(val) {                           	//验证值是否为空或者不可用
	        return val == '' || val == undefined || val == null
	    }
	}
	// 模块化
	if(typeof module !=="undefined" && module.exports){
		module.exports={regex,methods};
	}else if(typeof define=="function" && define.amd){
		define(function(){
			return {regex,methods};
		});
	}else{
		g.formObj={regex,methods};
	}
}(this);