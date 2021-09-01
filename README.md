# CalculatorMVC
_Simple calculator made with ASP.NET and C#_

## 1. Architecture
There are 2 main components in the project:
1. UI - standart web UI written with html, css, js without any frameworks. The main and the only view located in ```Views/Calculator/index.cshtml``` and contains one input display and many buttons with numbers and operators. Styles and scripts are located in ```/wwwroot/css/calculator.css``` and ```/wwwroot/js/calculator.js```. calculator.js also contains some validation logic. Http requests are sended to the server through xhr(XMLHttpRequest) class.
2. Server - contains one main controller ```CalculatorController.cs``` that handles two main requests. First - return index view on get ```https://localhost:5001/Calculator```. Second - evaluate expression string from route, for example ```https://localhost:5001/Calculator/Evaluate/27÷9*10000```. Calculations are performed using the standard library class ```DataTable```


## 2. User Guide
#### Installation
You can manually download the project as ZIP archive: Code -> Download ZIP. Or, if you have git installed, you can use this command:
```git clone https://github.com/Nezorin/CalculatorMVC.git ```

To run the project you can use your IDE or dotnet CLI. If you use Visual Studio: open the solution file, build the solution(Ctrl+B) and run the code(Ctrl+F5), preferably use Kestrel run profile. Or open Command Prompt(Console) and use these commands:
```
cd "PATH TO PROJECT FOLDER" 
dotnet build
dotnet run
```
#### Usage
Navigate to ```https://localhost:5001/Calculator``` in your web browser. 

Enter the expression you want to calculate, for instance "27÷9*10000". To enter values use buttons with numbers and operators.

Press "=" button to get the evaluation. If something went wrong the program will inform the user about it.

Example of usage:

![image](https://user-images.githubusercontent.com/47496652/131663289-91b69a02-fb0e-46d9-93e7-b3dee0a223a9.png)





