import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

export default class ScanScreen extends React.Component {
  constructor(){
    super();
    this.state={
      hasCameraPermissions:null,
      scanned:false,
      scannedData:'',
      buttonState:'normal'
    }
  }

  getCameraPermissions = async() => {
    const {status} = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
      hasCameraPermissions:status==='granted'
    })
  }

  handleBarcodeScanned = async({type,data}) => {
    this.state={
      scanned:true,
      scannedData:data,
      buttonState:'normal'
    }
  }

    render(){
      const hasCameraPermissions = this.state.hasCameraPermissions
      const scanned = this.state.scanned
      const buttonState = this.state.buttonState

      return(
        <Image
        style={styles.imageIcon}
        source={{
          uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Barcode-scanner.jpg/220px-Barcode-scanner.jpg',
        }}
      />

      if(buttonState==="clicked" && hasCameraPermissions){
        return(
          <BarCodeScanner 
          style={StyleSheet.absoluteFillObject}
          onBarCodeScanned={scaneed?undefined
            :this.handleBarcodeScanned}
          />
        )
      }else if(buttonState==="normal"){
        return (
          <View style={{flex:1,justifyContent:'center',alignItem:'center'}}>
      
            <Text style={styles.displayText}>
              {hasCameraPermissions===true?this.state.scannedData:"Request Camera Permissions"}
              </Text>
      
            <TouchableOpacity style={styles.scanButton}
            onPress={this.getCameraPermissions}>
              <Text style={styles.buttonText}>Scan</Text>
            </TouchableOpacity>
      
          </View>
        );
      }
      )

      

  
}
}

const styles=StyleSheet.create({
  displayText:{
    fontSize:15,
    textDecorationLine:'underline',
  },
  scanButton:{
    backgroundColor:"red",
    padding:10,
    margin:10
  },
   buttonText:{
     fontSize:20
   }
})