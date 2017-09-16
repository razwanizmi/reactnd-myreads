import React, { Component } from "react";
import PropTypes from "prop-types";

const styles = {
  content: {
    textAlign: "center"
  }
};

class Loading extends Component {
  state = {
    text: this.props.text
  };

  componentDidMount() {
    const stopper = `${this.props.text}...`;
    this.interval = window.setInterval(() => {
      if (this.state.text === stopper) {
        this.setState({
          text: this.props.text
        });
      } else {
        this.setState(function(prevState) {
          return {
            text: `${prevState.text}.`
          };
        });
      }
    }, this.props.speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return <p style={styles.content}>{this.state.text}</p>;
  }
}
Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
};
Loading.defaultProps = {
  text: "Loading",
  speed: 300
};

export default Loading;
