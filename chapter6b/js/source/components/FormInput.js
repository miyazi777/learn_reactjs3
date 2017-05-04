import classNames from 'classnames';
import React, {Component, PropTypes} from 'react';
import Rating from './Rating';
import Suggest from './Suggest';

class FormInput extends Component {
	getValue() {
		return 'value' in this.refs.input	// inputがvalueというプロパテイを持っているか？
			? this.refs.input.value					// 持っている場合、DOM上のvalueを取得する
			: this.refs.input.getValue();		// 持っていない場合、getValue()で取得する。今回のサンプルではSuggestとRatingがこちらを使う
  }

	render() {
		const common = {
			id: this.props.id,
			ref: 'input',
			defaultValue: this.props.defaultValue,
		};

		switch(this.props.type) {
			case 'year':
				return <input {...common} type="number" defaultValue={this.props.defaultValue || new Date().getFullYear()} />;
			case 'suggest':
				return <Suggest {...common} options={this.props.options} />;
			case 'rating':
				return <Rating {...common} defaultValue={parseInt(this.props.defaultValue, 10)} />;
			case 'text':
				return <textarea {...common} />;
			default:
		    return <input {...common} type="text"/>;
		}

	}
}

FormInput.propTypes = {
	type: PropTypes.oneOf(['year', 'suggest', 'rating', 'text', 'input']),
	id: PropTypes.string,
	options: PropTypes.array,	// 入力候補のoption
	defaultValue: PropTypes.any,
}

export default FormInput;
