var pngFile = File.openDialog("选择要导入的图像文件");
var psdFile = File.openDialog("选择要导入的图像文件");

var fileRef = File(app.path + "/Samples/Fish.psd")
var docRef = app.open(fileRef)
// Notice that in JavaScript, you must create a File object and then pass a reference to the object to the
// open() command.

if (imageFile) {
    // 打开图像文件
    var imageDoc = open(pngFile);

    // 复制图像到当前文档
    imageDoc.selection.selectAll();
    imageDoc.selection.copy();
    app.activeDocument.paste();

    // 关闭图像文档
    imageDoc.close(SaveOptions.DONOTSAVECHANGES);
}

// 定义函数
function copyFiles(dir1, dir2) {
    // 获取目录1中的所有文件
    var folder1 = new Folder(dir1);
    var files1 = folder1.getFiles();

    // 获取目录2中的所有文件
    var folder2 = new Folder(dir2);
    var files2 = folder2.getFiles();

    // 迭代目录2中的文件
    for (var i = 0; i < files2.length; i++) {
        // 获取文件名（不带扩展名）
        var fileName2 = files2[i].name.split(".")[0];

        // 在目录1中查找具有相同前缀的文件
        for (var j = 0; j < files1.length; j++) {
            // 获取文件名（不带扩展名）
            var fileName1 = files1[j].name.split(".")[0];

            // 检查文件名是否匹配
            if (fileName1 === fileName2) {
                // 打开目录1中的文件
                var file1 = new File(files1[j]);
                file1.open("r");
                var content = file1.read();
                file1.close();

                // 将内容写入目录2中的文件
                var file2 = new File(files2[i]);
                file2.open("w");
                file2.write(content);
                file2.close();
            }
        }
    }
}

// 调用函数
copyFiles("/path/to/dir1", "/path/to/dir2");

//JavaScript脚本。 目录1下和目录2下存在着前缀完全相同的文件名的文件。 
//写一个函数：获取目录1、目录2下的文件，放进数组里 迭代目录2数组，在目录1数组里寻找和目录2前缀相同的文件， 然后打开那个文件，将内容复制进目录2
