import * as React from 'react';
const styles = require('./index.styl');

import WorkSheetForm from 'components/form/WorkSheet';
import WorkSheetTable from 'components/common/WorkSheetTable';

export default class PageEntryPure extends React.Component<any, any> {
    handleChangeName({target: {value}}) {
        this.props.onUpdateUserName(value);
    }

    handleChangeSurname({target: {value}}) {
        this.props.onUpdateUserSurname(value);
    }

    handleChangeSex({target: {value}}) {
        this.props.onUpdateUserSex(value);
    }

    render() {
        let {user} = this.props;

        return (
            <div className={styles.page}>
                <h2>Hello {user.name || 'Anonym'}</h2>
                <div className={styles.worksheet}>
                    <div className={styles.form}>
                        <WorkSheetForm
                            {...user}
                            onChangeName={this.handleChangeName.bind(this)}
                            onChangeSurname={this.handleChangeSurname.bind(this)}
                            onChangeSex={this.handleChangeSex.bind(this)}
                        />
                    </div>
                    <div className={styles.preview}>
                        <WorkSheetTable {...user} />
                    </div>
                </div>
            </div>
        );
    }
}
