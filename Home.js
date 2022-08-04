import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import react ,{useState}from "react";
import { View,Text,StyleSheet,Button,TextInput} from "react-native";


const Home=(props)=>{
    const [count, setCount] = useState(0);
    const[name,setName]=useState('siva');
    const[str,setStr]=useState('');
    // useEffect(() => {
    //   // if(count>10){
    //   //   document.getElementById("check").innerHTML = "<Text>{name}</Text>"
    //   // }
    // }, [name])
    const Hi=()=>{
      setCount(count + 1);
      if (count>10) {
        // document.getElementById("check").innerHTML = "<Text>{name}</Text>"}
        //alert(name);
        setStr("Exceeded the limit "+name)
      }
    }
  return (
    <View style={styles.container}>
      {/* <Text >{props.name} clicking the button</Text> */}
      <TextInput onChange={(e)=>setName(e.target.value)}/>
      <Text>he clicked {count} times</Text>
      <Button
        onPress={Hi}

        title="Click me!"
      />
      <Text>{str}</Text>
    </View>
  );
};
const styles=StyleSheet.create(
    {
        sk:{alignItems:"center"}
    },
    

)
export default Home;

