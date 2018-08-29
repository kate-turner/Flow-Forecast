import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text } from "react-native";

class StreamList extends Component {
render(){
	const streamList = this.props.streamsData.map((stream, index) => {
		return <Text key={index}>
				{stream.sourceInfo.siteName},
				{stream.sourceInfo.geoLocation.geogLocation.latitude}
				{stream.sourceInfo.geoLocation.geogLocation.longitude},
				{stream.values[0].value[0].value}
				{stream.variable.variableDescription}
				</Text>
		});

	
	return (
		<ScrollView style={styles.listContainer}>
			  {streamList}
		</ScrollView>
	)
}
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    color: 'blue',
  }
});

export default StreamList; 