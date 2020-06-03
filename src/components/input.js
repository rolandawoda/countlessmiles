import React, {Component} from 'react';
import { CSSTransition, TransitionGroup} from 'react-transition-group';

class Input extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    }
  }

  
  setValue = (e) => {
    this.setState({
      value: e.target.value
    }, () => {
      this.props.change(this.state.value, this.props.fieldName)
    })
  }

  inputType = (type) => {
    switch(type) {
      case "text":
        return null;
    }
  }

  render() {
   const {id, title, type, uid} = this.props;
    return (
      <TransitionGroup  component={null}>
      <CSSTransition
        key={uid}
        timeout={500}
        classNames="form"
      >
        <div className={`form__group form__animateIn`}>
          <label htmlFor={id} className="form__label">{title}</label>
          <input type={type} id={id}  className="form__input" value={this.props.value} onChange={this.setValue} />
        </div>
      </CSSTransition>
      </TransitionGroup>
    )
  }
}

export default Input;