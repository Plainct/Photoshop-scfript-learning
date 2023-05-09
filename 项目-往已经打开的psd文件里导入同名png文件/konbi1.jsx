// 选择包含 .png 文件的目录
var pngFolder = Folder.selectDialog("选择包含 .png 文件的目录");

// 获取目录中的所有 .png 文件
var pngList = pngFolder.getFiles("*.png");

// 选择包含 .psd 文件的目录
var psdFolder = Folder.selectDialog("选择包含 .psd 文件的目录");

// 获取目录中的所有 .psd 文件
var psdList = psdFolder.getFiles("*.psd");

// 迭代 .png 文件列表
for (var i = 0; i < pngList.length; i++) {
    // 检查文件是否存在
    if (pngList[i] instanceof File) {
        // 打开 .png 文件
        var pngDoc = open(pngList[i]);

        // 复制 .png 图像到剪贴板
        pngDoc.selection.selectAll();
        pngDoc.selection.copy();

        // 关闭 .png 文档
        pngDoc.close(SaveOptions.DONOTSAVECHANGES);

        // 迭代 .psd 文件列表
        for (var j = 0; j < psdList.length; j++) {
            // 检查文件是否存在
            if (psdList[j] instanceof File) {
                // 打开 .psd 文件
                var psdDoc = open(psdList[j]);

                // 粘贴图像到当前文档
                psdDoc.paste();

                // 关闭 .psd 文档并保存更改
                psdDoc.close(SaveOptions.SAVECHANGES);
            }
        }
    }
}
//Q;Photoshop脚本，怎么将一个目录下的png文件，复制进另一个目录的psd文件
