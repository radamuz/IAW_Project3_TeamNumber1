* To delete the mongo_data folder (which we sometimes need to do to reload the databases from the /db folder)
```bash
sudo rm -r mongo_data
```

* To search for a string throughout the repository we will use the following command:
```bash
grep <stringToSearch> ./* -Rn --exclude-dir=./mongo_data --exclude-dir=./node_modules
```