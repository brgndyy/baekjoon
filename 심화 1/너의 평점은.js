let input = `ObjectOrientedProgramming1 3.0 A+
IntroductiontoComputerEngineering 3.0 A+
ObjectOrientedProgramming2 3.0 A0
CreativeComputerEngineeringDesign 3.0 A+
AssemblyLanguage 3.0 A+
InternetProgramming 3.0 B0
ApplicationProgramminginJava 3.0 A0
SystemProgramming 3.0 B0
OperatingSystem 3.0 B0
WirelessCommunicationsandNetworking 3.0 C+
LogicCircuits 3.0 B0
DataStructure 4.0 A+
MicroprocessorApplication 3.0 B+
EmbeddedSoftware 3.0 C0
ComputerSecurity 3.0 D+
Database 3.0 C+
Algorithm 3.0 B0
CapstoneDesigninCSE 3.0 B+
CompilerDesign 3.0 D0
ProblemSolving 4.0 P`.split("\n");

let inputArr = input.map((subject) => subject.split(" "));
let creditGradeSum = 0;
let creditSum = 0;

for (let i = 0; i < inputArr.length; i++) {
  let subject = inputArr[i][0];
  let credit = Number(inputArr[i][1]);

  let grade = inputArr[i][2];

  if (grade === "A+") {
    grade = 4.5;
  } else if (grade === "A0") {
    grade = 4.0;
  } else if (grade === "B+") {
    grade = 3.5;
  } else if (grade === "B0") {
    grade = 3.0;
  } else if (grade === "C+") {
    grade = 2.5;
  } else if (grade === "C0") {
    grade = 2.0;
  } else if (grade === "D+") {
    grade = 1.5;
  } else if (grade === "D0") {
    grade = 1.0;
  } else if (grade === "F" || grade === "P") {
    grade = 0;
  }

  creditSum += credit;
  creditGradeSum += credit * grade;
}

console.log((creditGradeSum / creditSum).toFixed(6));
