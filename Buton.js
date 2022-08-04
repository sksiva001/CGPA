
    
    import { StyleSheet, Text, TouchableOpacity, View ,TextInput, SafeAreaView, ImageBackground, ScrollView} from 'react-native'
    import React from 'react'
    import Pic from './assets/Anna.jpg'
    import { useState } from 'react'
    
    
    const Buton = () => {
      const[mark1internal, setMark1internal] = useState(0);
      const[mark2internal, setMark2internal] = useState(0);
      const[mark3internal, setMark3internal] = useState(0);
      const[mark4internal, setMark4internal] = useState(0);
      const[mark5internal, setMark5internal] = useState(0);
      const[mark6internal, setMark6internal] = useState(0);
      const[mark7internal, setMark7internal] = useState(0);
      const[mark8internal, setMark8internal] = useState(0);
      const[mark1external, setMark1external] = useState(0);
      const[mark2external, setMark2external] = useState(0);
      const[mark3external, setMark3external] = useState(0);
      const[mark4external, setMark4external] = useState(0);
      const[mark5external, setMark5external] = useState(0);
      const[mark6external, setMark6external] = useState(0);
      const[mark7external, setMark7external] = useState(0);
      const[mark8external, setMark8external] = useState(0);
      const[cgpa,setCgpa]=useState('')
      function calcGrade(mark){
        if(mark >= 90)
          return 10;
        else if(mark >= 80)
          return 9;
        else if(mark >= 70)
          return 8;
        else if(mark >= 60)
          return 7;
        else if(mark >= 50)
          return 6;
          else if(mark >= 40)
          return 5;
        else if(mark >= 30)
          return 4;
        else if(mark >= 20)
          return 3;
        
      }
    
      function calculateGPA() {
        // alert(parseInt(mark.cti) + parseInt(mark.cte));
        // alert("pass")
        // alert(calcGrade(parseInt(mark1external)))
        // alert(calcGrade(parseInt(mark.cti) + parseInt(mark.cte) * 0.6) + calcGrade(parseInt(mark.mati) + parseInt(mark.mate) * 0.6));
        if((parseInt(mark1internal) + parseInt(mark1external) * 0.6)<50||(parseInt(mark2internal) + parseInt(mark2external) * 0.6)<50||
        (parseInt(mark3internal) + parseInt(mark3external) * 0.6)<50||(parseInt(mark4internal) + parseInt(mark4external) * 0.6)<50||
        (parseInt(mark5internal) + parseInt(mark5external) * 0.6)<50||(parseInt(mark6internal) + parseInt(mark6external) * 0.6)<50||
        (parseInt(mark7internal) + parseInt(mark7external) * 0.6)<50||(parseInt(mark8internal) + parseInt(mark8external) * 0.6)<50)
        {alert("You Have Arrear..Try To Get More Marks")}
        else{
        let a = calcGrade(parseInt(mark1internal) + parseInt(mark1external) * 0.6) * 3 +
                calcGrade(parseInt(mark2internal) + parseInt(mark2external) * 0.5) * 4 +
                calcGrade(parseInt(mark3internal) + parseInt(mark3external) * 0.6) * 3 +
                calcGrade(parseInt(mark4internal) + parseInt(mark4external) * 0.6) * 2 +
                calcGrade(parseInt(mark5internal) + parseInt(mark5external) * 0.6) * 4 +
                calcGrade(parseInt(mark6internal) + parseInt(mark6external) * 0.6) * 3 +
                calcGrade(parseInt(mark7internal) + parseInt(mark7external) * 0.6) * 2 +
                calcGrade(parseInt(mark8internal) + parseInt(mark8external) * 0.6) * 2 ;
        a = a / 23;
        if(a>9)
        {
          alert("Grade : 'O'\nYour CGPA : "+a.toFixed(2));
        }
        else if(a>8)
        {
          alert("Grade : 'A+'\nYour CGPA : "+a.toFixed(2));
        }
        else if(a>7)
        {
          alert("Grade : 'A'\nYour CGPA : "+a.toFixed(2));
        }
        else if(a>6)
        {
          alert("Grade : 'B+'\nYour CGPA : "+a.toFixed(2));
        }
        else if(a>5)
        {
          alert("Grade : 'B+'\nYour CGPA : "+a.toFixed(2));
        }
       }
        
      }
      
      
    
      return (

        <ScrollView>
        <SafeAreaView style={{backgroundColor:'#F3ED9E',height:'100%',marginBottom:50}}>
          <ImageBackground source={Pic} resizeMode='cover'/>
            <View style={{marginTop:100,alignItems:'center'}}>
                <Text style={styles.cont}>CGPA GENERATION{'\n'}</Text>
            </View>
          <View style={{alignContent:'center',backgroundColor:'#F3ED9E'}}>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.titlesize}> SUBJECTS</Text>
            <Text>{'                  '}</Text>
            <Text style={styles.titlesize}>INTERNALS</Text>
            <Text>{ "                "}</Text>
            <Text style={styles.titlesize}>EXTERNALS{'\n'}</Text>
          </View>
          
          <View style={styles.ko}>
            <Text style={styles.subject}>{'\n'}DATA STRUCTURES {'\n'}AND ALGORITHMS       </Text>
            
            <TextInput style={styles.input} placeholder="Enter Marks" keyboardType="numeric"
              value={mark1internal}
              placeholderTextColor={'#000000'}
              backgroundColor="black"
              onChangeText={mark1internal => setMark1internal(mark1internal)} />
            <Text>{'             '}</Text>
            <TextInput value={mark1external} style={styles.input} placeholder="Enter Marks" 
            placeholderTextColor={'#000000'} backgroundColor={'black'} keyboardType="numeric"
            onChangeText={mark1external => setMark1external(mark1external)}/>
          </View>
          
            
        
          <View style={styles.ko}>
            <Text style={styles.subject}>{'\n'}CONTENT{'\n'}TECHNOLOGIES </Text>
            <Text>{'          '}</Text>
            <TextInput style={styles.input} placeholder="Enter Marks" keyboardType="numeric"
              value={mark2internal}
              placeholderTextColor={'#000000'}
              backgroundColor="black"
              onChangeText={mark2internal => setMark2internal(mark2internal)} />
            <Text>{'             '}</Text>
            <TextInput value={mark2external} style={styles.input} placeholder="Enter Marks" 
            placeholderTextColor={'#000000'} backgroundColor={'black'} keyboardType="numeric"
              onChangeText={mark2external => setMark2external(mark2external)}/>
          </View>
          
          <View style={styles.ko}>
            
            <Text style={styles.subject}>{'\n'}PYTHON{'\n'}PROGRAMMING </Text>
            <Text>{'         '}</Text>
            <TextInput style={styles.input} placeholder="Enter Marks" keyboardType="numeric"
              value={mark3internal}
              placeholderTextColor={'#000000'}
              backgroundColor="black"
              onChangeText={mark3internal => setMark3internal(mark3internal)} />
            <Text>{'             '}</Text>
            <TextInput value={mark3external} style={styles.input} placeholder="Enter Marks"
             placeholderTextColor={'#000000'} backgroundColor={'black'} keyboardType="numeric"
            onChangeText={mark3external => setMark3external(mark3external)}/>
          </View>
          
            


          <View style={styles.ko}>
            <Text style={styles.subject}>{'\n'}RESEARCH{'\n'}METHODOLOGY </Text>
            <Text>{'          '}</Text>
            <TextInput style={styles.input} placeholder="Enter Marks" keyboardType="numeric"
              value={mark4internal}
              placeholderTextColor={'#000000'}
              backgroundColor="black"
              onChangeText={mark4internal => setMark4internal(mark4internal)} />
            <Text>{'             '}</Text>
            <TextInput value={mark4external} style={styles.input} placeholder="Enter Marks" 
            placeholderTextColor={'#000000'} backgroundColor={'black'} keyboardType="numeric"
            onChangeText={mark4external => setMark4external(mark4external)}/>
          </View>
          
          <View style={styles.ko}>
            <Text style={styles.subject}>{'\n'}LINEAR ALGEBRA{'\n'}STATISTICS</Text>
            <Text>{'       '}</Text>
            <TextInput style={styles.input} placeholder="Enter Marks" keyboardType="numeric"
              value={mark5internal}
              placeholderTextColor={'#000000'}
              backgroundColor="black"
              onChangeText={mark5internal => setMark5internal(mark5internal)} />
            <Text>{'             '}</Text>
            <TextInput value={mark5external} style={styles.input} placeholder="Enter Marks" 
            placeholderTextColor={'#000000'} backgroundColor={'black'} keyboardType="numeric"
            onChangeText={mark5external => setMark5external(mark5external)}/>
          </View>
          
            


          <View style={styles.ko}>
            <Text style={styles.subject}>{'\n'}NETWORK{'\n'}PROGRAMMING</Text>
            <Text>{'          '}</Text>
            <TextInput style={styles.input} placeholder="Enter Marks" keyboardType="numeric"
              value={mark6internal}
              placeholderTextColor={'#000000'}
              backgroundColor="black"
              onChangeText={mark6internal => setMark6internal(mark6internal)} />
            <Text>{'             '}</Text>
            <TextInput value={mark6external} style={styles.input} placeholder="Enter Marks" 
            placeholderTextColor={'#000000'} backgroundColor={'black'} keyboardType="numeric"
            onChangeText={mark6external => setMark6external(mark6external)}/></View>


            <View style={styles.ko}>
            <Text style={styles.subject}>{'\n'}DSA{'\n'}LAB                        </Text>
            <Text>{'         '}</Text>
            <TextInput style={styles.input} placeholder="Enter Marks" keyboardType="numeric"
              value={mark7internal}
              placeholderTextColor={'#000000'}
              backgroundColor="black"
              onChangeText={mark7internal => setMark7internal(mark7internal)} />
            <Text>{'             '}</Text>
            <TextInput value={mark7external} style={styles.input} placeholder="Enter Marks"
             placeholderTextColor={'#000000'} backgroundColor={'black'} keyboardType="numeric"
            onChangeText={mark7external => setMark7external(mark7external)}/></View>

             <View style={styles.ko}>
            <Text style={styles.subject}>{'\n'}PYTHON{'\n'}LAB                        </Text>
            <Text>{'         '}</Text>
            <TextInput style={styles.input} placeholder="Enter Marks" keyboardType="numeric"
              value={mark8internal}
              placeholderTextColor={'#000000'}
              backgroundColor="black"
              onChangeText={mark8internal => setMark8internal(mark8internal)} />
            <Text>{'             '}</Text>
            <TextInput value={mark8external} style={styles.input} placeholder="Enter Marks"
             placeholderTextColor={'#000000'} backgroundColor={'black'} keyboardType="numeric"
            onChangeText={mark8external => setMark8external(mark8external)}/>
          </View>
          </View>
         <View>
            <TouchableOpacity style={styles.button} onPress={calculateGPA}>
              <Text style={styles.buttonText}>Calculate</Text>
              </TouchableOpacity>
          </View>
    
        </SafeAreaView>
        </ScrollView>
        
      )
    }
    
    export default Buton
    
    const styles = StyleSheet.create({
      titlesize: {
        fontSize: 15,
        fontWeight: 'bold',
        color:'#C84B31',
        
        
      },
      subject: {
        fontSize: 13,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color:'#541212',
    
      },
      input: {
        marginTop: 10,
        borderColor: '#8B9A46',
        width: 100,
        color: 'black',
        backgroundColor: '#DAEAF1',
        borderWidth: 3, borderRadius: 20,
        padding: 10,
        
    
      },
      button: {
        marginTop: 80,
        backgroundColor: '#9EB23B',
        borderRadius: 40,
        justifyContent: 'center',
        width: 200,
        height: 50,
        alignItems: 'center',
        marginLeft: 100,
        
      },
      ko:{
         flexDirection: 'row' ,
         backfaceVisibility:'visible'
      },

      buttonText: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        marginLeft: 'auto',
    
        marginRight: 'auto',
        marginBottom: 10,
      },
    cont:{
      fontWeight:"bold",
      fontSize:23,
      color:'black',
      
   
    

    }
    
    })