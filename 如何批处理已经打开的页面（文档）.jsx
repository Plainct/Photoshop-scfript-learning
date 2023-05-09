// 批处理所有打开的文档
function batchProcessOpenDocuments(runingFuction) {
    for (var i = 0; i < app.documents.length; i++) {
        app.activeDocument = app.documents[i];
     // 在这里添加你的处理代码
        runingFuction()
    }
}
// ... 
//这段代码利用了一个选项框，选中后就执行批处理命令。
else if(win.panel0.panel1.panel1row.radioOpened.value){    //执行所有打开的文档
        batchProcessOpenDocuments(function(){
            selectAllGroup();
            doAction(win.panel0.panel1.ActionName.selection.text, win.panel0.panel1.ActionSet.selection.text);
        })
    }
