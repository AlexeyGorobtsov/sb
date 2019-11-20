import React, {Component} from 'react';

export class List extends Component {

    getFormatDate = date => {
        const dateTimeFormat = new Intl.DateTimeFormat('ru-RU');
        return date ? dateTimeFormat.format(date) : ''
    };

    render() {
        const {taskList, removeTask, colorPage, colorFont} = this.props;
        const styleFromProps = {backgroundColor: colorPage, color: colorFont};

        return (
            <main style={styleFromProps}>
                <article>
                    <table>
                        <caption>Задачи</caption>
                        <thead>
                        <tr>
                            <th>Название задачи</th>
                            <th>Статус</th>
                            <th>Дата создание</th>
                            <th>Дата выполнения</th>
                            <th>Удалить задачу</th>
                        </tr>
                        </thead>
                        <tbody>
                        {taskList.map((item, i) => {
                            const {
                                name,
                                status,
                                dateCreate,
                                dateClose
                            } = item;

                            return (
                                <tr key={i}>
                                    <td>{name}</td>
                                    <td>{status}</td>
                                    <td>{this.getFormatDate(dateCreate)}</td>
                                    <td>{this.getFormatDate(dateClose)}</td>
                                    <td>
                                        <button className={'destroy'} onClick={() => removeTask(i)}>

                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </article>
            </main>
        )
    }
}