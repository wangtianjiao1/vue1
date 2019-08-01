const localekey='student'//为sessionstorage的key,sessionstorage和localestorage允许在浏览器中储存数据
export default{
	fetch:function(){
		return JSON.parse(window.sessionStorage.getItem(localekey)|| '[]') //读取sessionstorage数据
	},
	save:function(items){
       window.sessionStorage.setItem(localekey,JSON.stringify(items))//保存数据

	}
}