export default {
    container: {
        flex: 1,
    },
    navigationBar: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    closeButton: {
        position: 'absolute',
        right: 20,
        resizeMode: 'contain',
        width: 30,
        height: 55
    },
    headText: {
        marginTop: 45,
        marginLeft: 27
    },
    textStyle: {
        fontSize: 15,
        textAlign: 'left'
    },
    contentView: {
        alignItems: 'center',
        marginTop: 30,
        justifyContent: 'center'
    },
    line: {
        height: 3,
        backgroundColor: '#885FFF',
        width: 375,
        top: 42,
        position: 'absolute',
        left: 0
    },
    pharseBox: {
        height: 200,
        width: 321,
        backgroundColor: '#FCFCFC',
        marginTop: 35,
        borderWidth: 1,
        borderColor: '#DFDFE0',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'center',
        borderRadius:6
    },
    innerBox: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 10,
        height: 35,
        flexDirection: 'row',
        marginTop: 11,
        marginLeft: 8,
        borderWidth: 1,
        paddingRight: 5
    },
    numberBox: {
        marginLeft: 4,
        backgroundColor: '#6F6E73',
        color: 'white',
        width: 24,
        height: 24,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 8
    },
    nearButton: {
        marginTop:35,
        backgroundColor: '#885FFF',
        width: 250,
        height: 56,
        alignItems: 'center',
        borderRadius: 15
    },
    nearText: {
        flex: 1,
        fontSize:20,
        color: 'white',
        marginRight:20,
        textAlignVertical: 'center'
    },
    nearForwardArrow: {
        flex:1,
        width:25,
        height:16,
        marginLeft:180,
        marginTop:21,
        position:"absolute"
    }
};
