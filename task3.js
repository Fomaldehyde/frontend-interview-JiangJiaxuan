// 给定一组图形化代码块的json数据，编写函数将其转换为JavaScript代码字符串
// 例如：
// // 输入：jsonData\
// 输出：
// 当开始运行(() => {
//     永远循环(() => {
//       if (判断角色碰撞("自己", "鼠标")) {
//         移动步数(10);
//       } else {
//         移到位置(0, -100);
//       }
//     });
//   });
function convertToJS(json) {
    //递归处理内部的结构
    function handleBlock(block){
        switch(block.type){
            case "当开始运行":
                return `当开始运行(() => {
     ${handleBlock(block.next)}
   });`
            case "永远循环":
                return `永远循环(() => {
       ${handleBlock(block.statements.DO)}
     });`
            case "如果":
                return `if (${handleBlock(block.inputs.IF0)}) {
         ${handleBlock(block.statements.DO0)}
       } else {
         ${handleBlock(block.statements.ELSE)}
       }`
            case "判断角色碰撞":
                return `判断角色碰撞("${block.fields.sprite}", "${block.fields.sprite1}")`
            case "移动步数":
                return `移动步数(${handleBlock(block.inputs.steps)})`
            case "移到位置":
                return `移到位置(${handleBlock(block.inputs.x)}, ${handleBlock(block.inputs.y)})`
            case "math_number":
                return block.fields.NUM
            default:
                return "";
        }
    }
    return handleBlock(json[0]);
}


const jsonData = [
    {
        "type": "当开始运行",
        "next": {
          "type": "永远循环",
          "statements": {
            "DO": {
              "type": "如果",
              "inputs": {
                "IF0": {
                  "type": "判断角色碰撞",
                  "fields": {
                    "sprite": "自己",
                    "sprite1": "鼠标"
                  },
                  "is_output": true
                }
              },
              "statements": {
                "DO0": {
                  "type": "移动步数",
                  "inputs": {
                    "steps": {
                      "type": "math_number",
                      "fields": {
                        "NUM": 10
                      },
                      "is_output": true
                    }
                  }
                },
                "ELSE": {
                  "type": "移到位置",
                  "inputs": {
                    "x": {
                      "type": "math_number",
                      "fields": {
                        "NUM": 0
                      },
                      "is_output": true
                    },
                    "y": {
                      "type": "math_number",
                      "fields": {
                        "NUM": -100
                      },
                      "is_output": true
                    }
                  }
                }
              }
            }
          }
        }
      }
]
console.log(convertToJS(jsonData));