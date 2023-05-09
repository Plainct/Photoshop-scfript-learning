// 选择目录
var inputFolder = Folder.selectDialog("选择一个目录");

// 获取目录中的所有 .psd 文件
var fileList = inputFolder.getFiles("*.psd");
for(var i=0;i < fileList.length; i++) {
    // app.open(fileList[i]);
    alert("正在打开文件：" + fileList[i].fsName);

    var doc = open(fileList[i]);

}

alert(toString(doc))
