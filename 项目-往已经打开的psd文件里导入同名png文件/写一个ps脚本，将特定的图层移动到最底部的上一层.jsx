这是一个可以将当前选定的图层移动到最底层上一层的Photoshop脚本示例：

```javascript
// 获取当前文档和当前选定的图层
var doc = app.activeDocument;
var selectedLayer = doc.activeLayer;

// 获取图层总数
var numOfLayers = doc.layers.length;

// 获取最底层的图层
var bottomLayer = doc.layers[numOfLayers-1];

// 将选定的图层移动到最底层上一层
selectedLayer.move(bottomLayer, ElementPlacement.PLACEBEFORE);
```

// 您可以将此代码复制并粘贴到一个文本编辑器中，然后将其保存为.jsx文件。 然后，您可以在Photoshop中通过“文件”>“脚本”>“浏览”来运行该脚本。

// 请注意，此脚本仅适用于将当前选定的图层移动到最底层上一层。 如果您希望移动特定名称或特定位置的图层，则需要对脚本进行相应修改。
