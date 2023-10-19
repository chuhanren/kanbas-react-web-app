import VariablesAndConstants from "./VariableLesAndConstants";
import VariableTypes from "./VariableTypes";
import BaseComponent from "bootstrap/js/dist/base-component";
import BooleanVariable from "./BooleanVariables";
import Ifelse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import WorkingWithFunctions from "./WorkingWithFunctions";
import TemplateLiteral from "./TemplateLiterals";
import House from "./House";
import Spread from "./Spread";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";

function JavaScript() {
    console.log("Hello World!");
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          <VariableTypes/>
          <BooleanVariable/>
          <Ifelse/>
          <TernaryOperator/>
          <WorkingWithFunctions/>
          <TemplateLiteral/>
          <House/>
          <Spread/>
          <Destructing/>
          <FunctionDestructing/>
       </div>
    );
 }
 export default JavaScript