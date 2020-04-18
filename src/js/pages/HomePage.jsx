import React, { Component } from 'react';
import TranslationContainer from 'components/Translation/TranslationContainer';

export default class HomePage extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h1><TranslationContainer translationKey="title"/></h1>
          <p>This is a simple example project to demonstrate how to build a translation component with React and Redux.</p>
        </div>
        <div className="col-md-6">
          <table>
            <caption><TranslationContainer translationKey="table_caption"/></caption>
            <thead>
              <tr>
                <th><TranslationContainer translationKey="table_th_name"/></th>
                <th><TranslationContainer translationKey="table_th_surname"/></th>
                <th><TranslationContainer translationKey="table_th_alias"/></th>
                <th><TranslationContainer translationKey="table_th_profession"/></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Chad</td>
                <td>Wilberts</td>
                <td>MrOne</td>
                <td><TranslationContainer translationKey="developer"/></td>
              </tr>
              <tr>
                <td>Adam</td>
                <td>Smith</td>
                <td>TheSmith</td>
                <td><TranslationContainer translationKey="developer"/></td>
              </tr>
              <tr>
                <td>Sophia</td>
                <td>Canderson</td>
                <td>Candee</td>
                <td><TranslationContainer translationKey="developer"/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
