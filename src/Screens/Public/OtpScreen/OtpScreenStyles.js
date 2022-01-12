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
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center'
  },
  linkStyle: {
    fontSize: 17,
    color: '#587BE0',
    textAlign: 'center',
    marginTop: 25
  },
  contentView: {
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'center'
  },
  continueButtonView: {
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#885FFF',
    width: 170,
    height: 56,
    alignItems: 'center',
    borderRadius: 15
  },
  disabledButton: {
    backgroundColor: '#BEBEC2',
    width: 170,
    height: 56,
    alignItems: 'center',
    borderRadius: 15
  },
  continueText: {
    flex: 1,
    fontSize: 20,
    color: 'white',
    marginRight: 20,
    textAlignVertical: 'center'
  },
  forwardArrow: {
    flex: 1,
    width: 25,
    height: 16,
    marginLeft: 97,
    marginTop: 21,
    position: "absolute"
  },
  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#CFCFCF",
  },

  underlineStyleBase: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 6,
    color: 'black',
    backgroundColor: '#00000003'
  },

  underlineStyleHighLighted: {
    borderColor: "#885FFF",
  },
  line: {
    borderWidth: 1,
    borderColor: '#E9E6E6',
    width: 320,
    marginTop: 30
  }
};
