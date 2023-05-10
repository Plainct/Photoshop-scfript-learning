// 您可以使用 Photoshop 的脚本用户界面组件来创建一个带有单选框和文本输入字段的对话框。以下是一个简单的示例，它创建了一个带有单选框和文本输入字段的对话框。当用户选中单选框时，文本输入字段将被启用，允许用户输入文本：

var dlg = new Window('dialog', 'My Dialog');
dlg.checkbox = dlg.add('checkbox', undefined, 'Enable Input');
dlg.checkbox.value = false;
dlg.input = dlg.add('edittext', undefined, 'Enter text here');
dlg.input.enabled = false;
dlg.checkbox.onClick = function() {
    dlg.input.enabled = this.value;
}
dlg.add('button', undefined, 'OK', {name: 'ok'});
dlg.show();
// 您可以将此代码保存为一个 .jsx 文件，然后在 Photoshop 中运行它。您可以通过选择 文件 > 脚本 > 浏览 来运行脚本，然后浏览到您保存的脚本文件。
Q;Photoshop js脚本 如果要写一个单选框，选中的时候需要用户自己输入，该怎么写
