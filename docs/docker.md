* To delete all active and non-active containers we will use the following command:
```bash
docker rm -f $(docker ps -qa)
```