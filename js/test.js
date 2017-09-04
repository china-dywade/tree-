$(function () {

    var json =
        [
	        {
	            "name": "站长之家",
	            "code":"ZKCH",
	            "icon": "icon-th",
	            "child": [
	                {
	                    "name": "站长素材",
	                    "icon": "icon-minus-sign",
	                    "code":"GZZKCH",
	                    "parentCode": "ZKCH",
	                    "child": [
	                        {
	                            "name": "jQuery特效",
	                            "code":"GZZKCHTQFH",
	                            "icon": "icon-minus-sign",
	                            "parentCode": "GZZKCH",
	                            "child": [
	                            			{
	                            				
	                            			   "name": "jQuery特效3",
					                            "code":"GZZKCHTQFHJKL",
					                            "icon": "icon-minus-sign",
					                            "parentCode": "GZZKCHTQFH",
					                            "child": []	
	                            			}
	                                      
	                            
	                            		]
	                        }
	                    ]
	                },
	                {
	                    "name": "站长工具",
	                    "icon": "",
	                    "code":"BJZKCH",
	                    "parentCode": "ZKCH",
	                    "child": [
	                        {
	                            "name": "SEO分析优化",
	                            "code":"BJZKCHZCFH",
	                            "icon": "",
	                            "parentCode": "BJZKCH",
	                            "child": []
	                        }
	                    ]
	                }
	            ]
	        }, 
			{
            "name": "一级目录",
            "code":"ZKKJ",
            "icon": "icon-th",
            "child": [
		                {
		                    "name": "二级目录",
		                    "code":"GZZKKJ",
		                    "icon": "icon-minus-sign",
		                    "parentCode": "ZKKJ",
		                    "child": [
		                        {
		                            "name": "三级目录",
		                            "code":"GZTHZKKJ",
		                            "icon": "icon-minus-sign",
		                            "parentCode": "GZZKKJ",
		                            "child": [
		                            		
					                      {
					                            "name": "4级目录",
					                            "code":"GZTHZKKJSS",
					                            "icon": "icon-minus-sign",
					                            "parentCode": "GZTHZKKJ",
					                            "child": [
					                            
						                            		 {
									                            "name": "5级目录",
									                            "code":"GZTHZKKJSSBBBBB",
									                            "icon": "",
									                            "parentCode": "GZTHZKKJSS",
									                            "child": [
									                            
									                            
									                            ]
									                        }
					                            ]
					                        }
		                            		
		                            		
		                            
		                            ]
		                        }
		                    ]
		                }
            		]	
        }
		];


    function tree(data) {
        for (var i = 0; i < data.length; i++) {
            var data2 = data[i];
            if (data[i].icon == "icon-th") {
                $("#rootUL").append("<li data-name='" + data[i].code + "'><span><i class='" + data[i].icon + "'></i> " + data[i].name + "</span></li>");
            } else {
                var children = $("li[data-name='" + data[i].parentCode + "']").children("ul");
                if (children.length == 0) {
                    $("li[data-name='" + data[i].parentCode + "']").append("<ul></ul>")
                }
                $("li[data-name='" + data[i].parentCode + "'] > ul").append(
                    "<li data-name='" + data[i].code + "'>" +
                    "<span>" +
                    "<i class='" + data[i].icon + "'></i> " +
                    data[i].name +
                    "</span>" +
                    "</li>")
            }
            for (var j = 0; j < data[i].child.length; j++) {
                var child = data[i].child[j];
                var children = $("li[data-name='" + child.parentCode + "']").children("ul");
                if (children.length == 0) {
                    $("li[data-name='" + child.parentCode + "']").append("<ul></ul>")
                }
                $("li[data-name='" + child.parentCode + "'] > ul").append(
                    "<li data-name='" + child.code + "'>" +
                    "<span>" +
                    "<i class='" + child.icon + "'></i> " +
                    child.name +
                    "</span>" +
                    "</li>")
                var child2 = data[i].child[j].child;
                tree(child2)
            }
            tree(data[i]);
        }

    }

    tree(json)


});