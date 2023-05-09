// 选择要打开的 .png 文件
var pngFile = File.openDialog("选择要打开的 .png 文件");

// 如果选择了文件，则打开它
if (pngFile) {
    // 打开 .png 文件
    var pngDoc = open(pngFile);

    // 选择所有图层
    pngDoc.activeLayer = pngDoc.layers[0];
    for (var i = 1; i < pngDoc.layers.length; i++) {
        pngDoc.activeLayer = pngDoc.layers[i];
        var idslct = charIDToTypeID("slct");
        var desc3 = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        var ref2 = new ActionReference();
        var idLyr = charIDToTypeID("Lyr ");
        ref2.putName(idLyr, pngDoc.activeLayer.name);
        desc3.putReference(idnull, ref2);
        var idselectionModifier = stringIDToTypeID("selectionModifier");
        var idselectionModifierType = stringIDToTypeID("selectionModifierType");
        var idaddToSelection = stringIDToTypeID("addToSelection");
        desc3.putEnumerated(idselectionModifier, idselectionModifierType, idaddToSelection);
        executeAction(idslct, desc3, DialogModes.NO);
    }

    // 复制选定的图层
    var idCpTL = charIDToTypeID("CpTL");
    executeAction(idCpTL, undefined, DialogModes.NO);
}


///上面代码的解释：
这段代码使用了 Photoshop 的动作描述符（Action Descriptor）和动作引用（Action Reference）来选择文档中的图层。它的作用是将当前活动图层添加到已选定的图层中。

下面是对这段代码的逐行解释：

pngDoc.activeLayer = pngDoc.layers[i];：将文档中的第 i 个图层设置为当前活动图层。
var idslct = charIDToTypeID("slct");：获取“选择”操作的 ID。
var desc3 = new ActionDescriptor();：创建一个新的动作描述符。
var idnull = charIDToTypeID("null");：获取“空”类型的 ID。
var ref2 = new ActionReference();：创建一个新的动作引用。
var idLyr = charIDToTypeID("Lyr ");：获取“图层”类型的 ID。
ref2.putName(idLyr, pngDoc.activeLayer.name);：在动作引用中添加一个名称为当前活动图层名称的“图层”类型引用。
desc3.putReference(idnull, ref2);：在动作描述符中添加一个“空”类型引用，其值为上面创建的动作引用。
var idselectionModifier = stringIDToTypeID("selectionModifier");：获取“选择修改器”类型的 ID。
var idselectionModifierType = stringIDToTypeID("selectionModifierType");：获取“选择修改器类型”类型的 ID。
var idaddToSelection = stringIDToTypeID("addToSelection");：获取“添加到选择”类型的 ID。
desc3.putEnumerated(idselectionModifier, idselectionModifierType, idaddToSelection);：在动作描述符中添加一个枚举类型，其键为“选择修改器”，值为“选择修改器类型”，枚举值为“添加到选择”。
executeAction(idslct, desc3, DialogModes.NO);：执行“选择”操作，使用上面创建的动作描述符，不显示任何对话框。
这段代码的最终效果是将当前活动图层添加到已选定的图层中。

////
动作描述符（Action Descriptor）是 Photoshop 脚本中的一个对象，它用于描述和存储动作的参数。动作描述符可以包含多种类型的数据，包括字符串、整数、布尔值、列表、对象等。

动作描述符通常用于与动作引用（Action Reference）一起使用，以执行特定的操作。例如，您可以创建一个动作描述符来描述“选择”操作的参数，然后使用 executeAction() 函数执行该操作。

您可以使用 new ActionDescriptor() 来创建一个新的动作描述符，并使用其提供的方法（如 putString()、putInteger() 等）来添加参数。
///

您可以使用 stringIDToTypeID() 函数替换 charIDToTypeID() 函数来使用字符串 ID 描述上面的代码。下面是修改后的代码：

pngDoc.activeLayer = pngDoc.layers[i];
var idslct = stringIDToTypeID("select");
var desc3 = new ActionDescriptor();
var idnull = charIDToTypeID("null");
var ref2 = new ActionReference();
var idLyr = charIDToTypeID("layer");
ref2.putName(idLyr, pngDoc.activeLayer.name);
desc3.putReference(idnull, ref2);
var idselectionModifier = stringIDToTypeID("selectionModifier");
var idselectionModifierType = stringIDToTypeID("selectionModifierType");
var idaddToSelection = stringIDToTypeID("addToSelectionContinuous");
desc3.putEnumerated(idselectionModifier, idselectionModifierType, idaddToSelection);
executeAction(idslct, desc3, DialogModes.NO);
