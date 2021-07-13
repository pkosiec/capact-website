import React, { FunctionComponent } from "react";
import styles from "./Terminal.module.css";

const data = {
    src: "/asciinema/capact-cli.cast",
    poster: "npt:0:03"
}

export const Terminal: FunctionComponent = () => {
    return (
        <div className={styles.terminalWrapper}>
        <asciinema-player class="mobile-hide" {...data} cols="50" rows="10" font-size="medium"/>
        <asciinema-player class="mobile-display" {...data} cols="50" rows="10" font-size="small"/>
        </div>
    )
}


class Asciinema extends React.Component {
    static defaultProps = {
      theme: 'monokai',
      idleTimeLimit: 2,
      poster: 'npt:0:3'
    };
  
    bindRef = (ref) => {
      this.ref = ref;
    };
  
    componentDidMount() {
      asciinema.player.js.CreatePlayer(
        this.ref,
        this.props.src,
        this.props
      );
    }
  
    componentWillUnmount() {
      if (!this.ref) return;
  
      asciinema.player.js.UnmountPlayer(this.ref);
      this.ref = null;
    }
  
    render() {
      return (
        <div ref={this.bindRef}/>
      );
    }
  }