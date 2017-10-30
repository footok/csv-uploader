# Rails CSV uploader 

## Overview
Use rails and Reactjs to build application that allows user to upload a csv file.
After uploading the file, user should be able to see contents of the csv file as a table view.
Also, user can sort the table by clicking column headers, and filtering by name with the filter bar.

## Getting started

### Prerequisites
Make sure you have set correct ruby version.

Ruby version used

```
ruby 2.4.2
```

Rails version used

```
rails 5.1.4
```

Run bundle

```
bundle
```

Run migration

```
rake db:migrate
```

### To check the app
Run server

```
rails server
```

Upload a csv file that has columns ['name', 'date', 'number', 'description].

It will generate a table. Click columns and see if it sorts columns by ascending and descending orders.

Enter a text in the search bar to filter by name.
