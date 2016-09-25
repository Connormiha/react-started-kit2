import * as React from 'react';

const b = bem('entry');

import WorkSheetForm from 'components/form/WorkSheet';
import WorkSheetTable from 'components/common/WorkSheetTable';
import './index.styl';

export default class PageEntryPure extends React.Component<any ,any> {
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
            <div className={b}>
                <h2>Hello {user.name || 'Anonym'}</h2>
                <div className={b('worksheet')}>
                    <div className={b('form')}>
                        <WorkSheetForm
                            {...user}
                            onChangeName={this.handleChangeName.bind(this)}
                            onChangeSurname={this.handleChangeSurname.bind(this)}
                            onChangeSex={this.handleChangeSex.bind(this)}
                        />
                    </div>
                    <div className={b('preview')}>
                        <WorkSheetTable {...user} />
                    </div>
                </div>
            </div>
        );
    }
}
