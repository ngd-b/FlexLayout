function handleFun(dom){
	this.selectDom = dom;
	this.cssName = this.selectDom.innerText;
	this.cssStyle = getCssStyle(this.selectDom);
	// 获取需要更改的style样式名
	function getCssStyle(dom){
		return dom.parentNode.previousSibling.previousSibling.innerText;

	}
	// style名首字母大写
	function handleCssName(str){
		let cssStyleName = str.split("-");

		return cssStyleName[0]+upperCaseLetter(cssStyleName[1]);
	}
	// 改变dom元素的样式
	function handleStyle(){
		//let cssDiv = 'box'+"-"+this.cssStyle.split("-")[1];

		// 获取到父元素然后查询到更改项
		let itemSelect = this.selectDom.parentNode.previousSibling.parentNode.nextElementSibling;
		
		//let divDom = parentSelect.getElementsByClassName("box-item");
		
		let cssStyleName = handleCssName(this.cssStyle);
		itemSelect.style[cssStyleName] = cssName;
	}
	// 处理字符串首字母大写
	function upperCaseLetter(str){
		let arr = str.split("");
		arr[0]=arr[0].toUpperCase();
		return arr.join("");
	}
	handleStyle();
}
function selectItem(){
	let selectItem = document.getElementsByClassName("select-item");
	for(let i=0;i<selectItem.length;i++){
		selectItem[i].onclick=function(){
			handleFun(selectItem[i]);
		};
	}
}
