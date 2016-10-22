import * as React from 'react';
const styles = require('./index.styl');

export default class FormWorkSheet extends React.PureComponent<any, any> {
    render() {
        let {name, surname, sex, onChangeName, onChangeSurname, onChangeSex} = this.props,
            classNameLabel = styles.label,
            classNameLabelTitle = styles['label-title'];

        return (
            <form>
                <label className={classNameLabel}>
                    <span className={classNameLabelTitle}>Name:</span>
                    <input value={name} onChange={onChangeName} />
                </label>

                <label className={classNameLabel}>
                    <span className={classNameLabelTitle}>Surname:</span>
                    <input value={surname} onChange={onChangeSurname} />
                </label>

                <label className={classNameLabel}>
                    <span className={classNameLabelTitle}>Sex:</span>
                    <select onChange={onChangeSex} defaultValue={sex}>
                        {['male', 'female'].map((item) => {
                            return (
                                <option key={item} value={item}>{item}</option>
                            );
                        })}
                    </select>
                </label>
            </form>
        );
    }
}
