from datetime import datetime
from flask import Flask, render_template, jsonify
import pypyodbc
from datetime import datetime

from flask import render_template, redirect, request

app = Flask(__name__)
print(__name__)
# creating connection Object which will contain SQL Server Connection
connection = pypyodbc.connect(
    'Driver={SQL Server};Server=20.20.1.7;Database=X94D_DERIVE;uid=driveapp;pwd=daVIZta@117')  # Creating Cursor


#
# cursor = connection.cursor()
# cursor.execute("SELECT * FROM USERS_MASTER")
# s = "<table style='border:1px solid red'>"
# for row in cursor:
#     s = s + "<tr>"
# for x in row:
#     s = s + "<td>" + str(x) + "</td>"
# s = s + "</tr>"
# connection.close()
@app.route('/')
def home():
    return render_template('index.html')


@app.route('/api/tasks', methods=['GET'])
def get_all_tasks():
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM GP_SCENARIOS")
    rv = cursor.fetchall()
    return jsonify(rv)


@app.route('/aggrid', methods=['GET'])
def get_agGridData():
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM GP_SCENARIOS")
    rv = cursor.fetchall()
    columns = [desc[0] for desc in cursor.description]
    result = []
    for row in rv:
        row = dict(zip(columns, row))
        result.append(row)
        print(jsonify(result))
    return jsonify(result)


@app.route('/api/tasks', methods=['POST'])
def add_tasks():
    cursor = connection.cursor()
    scenarioId = int(request.get_json()['SCENARIO_ID'])
    clientId = int(request.get_json()['CLIENT_ID'])
    organizationId = int(request.get_json()['ORGANIZATION_ID'])
    driveModuleId = int(request.get_json()['DRIVE_MODULE_ID'])
    scenarioName = str(request.get_json()['SCENARIO_NAME'])
    scenarioDesc = request.get_json()['SCENARIO_DESC']
    userName = request.get_json()['USER_NAME']
    updatedBy = request.get_json()['DT']

    print(scenarioId)
    print(scenarioName)
    cursor.execute('''
        INSERT INTO GP.GP_SCENARIOS
        (SCENARIO_ID,	CLIENT_ID,	ORGANIZATION_ID,	DRIVE_MODULE_ID,	SCENARIO_NAME	,SCENARIO_DESC,	CREATED_BY,	CREATED_ON,	_LAST_UPDATED_BY,	_LAST_UPDATED_ON)
        VALUES
        (  
            ''' + str(scenarioId) + '''
           ,''' + str(clientId) + '''
           ,''' + str(organizationId) + '''
           ,''' + str(driveModuleId) + '''
           ,' ''' + str(scenarioName) + ''' '
           ,' ''' + str(scenarioDesc) + ''' '
           ,' ''' + str(userName) + ''' '
           ,' ''' + str(updatedBy) + ''' '
           ,' ''' + str(userName) + ''' '
           ,' ''' + str(updatedBy) + ''' '
         )
         ''')
    connection.commit()
    result = {'GP': scenarioName + ' Created Successfully'}
    return jsonify(result)


@app.route('/api/tasks/<scenario_id>', methods=['PUT'])
def update_tasks(scenario_id):
    cursor = connection.cursor()
    print(scenario_id)
    scenarioName = str(request.get_json()['SCENARIO_NAME'])
    cursor.execute("UPDATE GP.GP_SCENARIOS SET SCENARIO_NAME ='" + scenarioName + "' WHERE SCENARIO_ID= " + scenario_id)
    connection.commit()
    result = {'GP': scenarioName + ' Updated Successfully'}
    return jsonify(result)


@app.route('/api/tasks/<scenario_id>', methods=['DELETE'])
def delete_tasks(scenario_id):
    cursor = connection.cursor()
    print(scenario_id)
    scenarioName = str(request.get_json()['SCENARIO_NAME'])
    cursor.execute("DELETE FROM  GP.GP_SCENARIOS WHERE SCENARIO_ID= " + scenario_id)
    connection.commit()
    result = {'GP': scenarioName + ' Deleted  Successfully'}
    return jsonify(result)


print(__name__)

if __name__ == '__main__':
    app.run(host="localhost", port=2424, debug=True)
