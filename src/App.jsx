import { Rect } from './demo';
import { fabric } from 'fabric';

function App() {
  const canvas = new fabric.Canvas('c', {
    backgroundColor: 'blue', // 初始画布背景色
  });

  canvas.clear();

  canvas.on('object:modified', e => {
    console.log(e.target); // e.target 为当前编辑的Object，旋转、缩放、移动等编辑图层的操作都能监听到，所以如果有撤销、恢复的场景，这里可以保存编辑状态
  });

  fabric.Image.fromURL('https://img0.baidu.com/it/u=3438413553,834879777&fm=26&fmt=auto&gp=0.jpg', img => {
    img.set({
      // 通过 sclae 来设置图片大小
      scaleX: canvas.width / img.width,
      scaleY: canvas.height / img.height,
    });
    // 设置背景
    // canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
    canvas.add(img);
    canvas.renderAll();
  });

  const testbox = new fabric.Textbox('这是一段文字', {
    left: 50,
    top: 50,
    width: 150,
    fontSize: 29,
    fontWeight: 800,
    stroke: 'green', // 描边颜色
    strokeWidth: 3, // 描边宽度
    hasControls: true,
    borderColor: 'orange',
    editingBorderColor: 'blue', // 点击文字进入编辑状态时的边框颜色
  });
  canvas.add(testbox);

  canvas.renderAll();

  return (
    <>
      {/* <Rect></Rect> */}
      <canvas id='c' width='400' height='400'></canvas>
    </>
  );
}

export default App;
