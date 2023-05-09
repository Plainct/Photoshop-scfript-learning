// 在 Photoshop 脚本中，你可以使用 JavaScript 来添加单选按钮（radio button）。下面是一个简单的例子：
var dialog = new Window("dialog", "My Dialog");
dialog.alignChildren = "left";

var radio1 = dialog.add("radiobutton", undefined, "Option 1");
var radio2 = dialog.add("radiobutton", undefined, "Option 2");

radio1.value = true;

var buttonGroup = dialog.add("group");
buttonGroup.orientation = "row";
buttonGroup.add("button", undefined, "OK", {name: "ok"});
buttonGroup.add("button", undefined, "Cancel", {name: "cancel"});

dialog.onShow = function() {
    radio1.onClick = function() {
        // 执行函数 1
    }
    radio2.onClick = function() {
        // 执行函数 2
    }
}

dialog.show();

// //在这个例子中，我们创建了一个对话框 dialog，并向其中添加了两个单选按钮 radio1 和 radio2。我们还添加了一个按钮组 buttonGroup，其中包含“确定”和“取消”两个按钮。

// 你可以通过设置单选按钮的 onClick 事件来定义当用户点击单选按钮时要执行的函数。例如，在上面的代码中，当用户点击 radio1 时，会执行“函数 1”，当用户点击 radio2 时，会执行“函数 2”。

// 希望这个例子能够帮助你理解如何在 Photoshop 脚本中
