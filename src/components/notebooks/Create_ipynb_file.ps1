#By BigTeddy 05 September 2011 
 
#This script uses the .NET FileSystemWatcher class to monitor file events in folder(s). 
#The advantage of this method over using WMI eventing is that this can monitor sub-folders. 
#The -Action parameter can contain any valid Powershell commands.  I have just included two for example. 
#The script can be set to a wildcard filter, and IncludeSubdirectories can be changed to $true. 
#You need not subscribe to all three types of event.  All three are shown for example. 
# Version 1.1 
 
$folder = 'F:\AirlineDataScience\airline-data-science\src\components\notebooks' # Enter the root path you want to monitor. 
$filter = 'Code.txt'  # You can enter a wildcard filter here. 
 
# In the following line, you can change 'IncludeSubdirectories to $true if required.                           
$fsw = New-Object IO.FileSystemWatcher $folder, $filter -Property @{IncludeSubdirectories = $false;NotifyFilter = [IO.NotifyFilters]'FileName, LastWrite'} 
 
# Here, all three events are registerd.  You need only subscribe to events that you need: 
 
Register-ObjectEvent $fsw Created -SourceIdentifier FileCreated -Action {
python Create_ipynb_file.py
$name = $Event.SourceEventArgs.Name 
$changeType = $Event.SourceEventArgs.ChangeType 
$timeStamp = $Event.TimeGenerated 
Write-Host "The file '$name' was $changeType at $timeStamp" -fore green 
Out-File -FilePath outlog.txt -Append -InputObject "The file '$name' was $changeType at $timeStamp"} 
 
Register-ObjectEvent $fsw Deleted -SourceIdentifier FileDeleted -Action { 
python Create_ipynb_file.py
$name = $Event.SourceEventArgs.Name 
$changeType = $Event.SourceEventArgs.ChangeType 
$timeStamp = $Event.TimeGenerated 
Write-Host "The file '$name' was $changeType at $timeStamp" -fore red 
Out-File -FilePath outlog.txt -Append -InputObject "The file '$name' was $changeType at $timeStamp"} 
 
Register-ObjectEvent $fsw Changed -SourceIdentifier FileChanged -Action { 
python Create_ipynb_file.py
$name = $Event.SourceEventArgs.Name 
$changeType = $Event.SourceEventArgs.ChangeType 
$timeStamp = $Event.TimeGenerated 
Write-Host "The file '$name' was $changeType at $timeStamp" -fore white 
Out-File -FilePath outlog.txt -Append -InputObject "The file '$name' was $changeType at $timeStamp"} 
 
# To stop the monitoring, run the following commands: 
# Unregister-Event FileDeleted 
# Unregister-Event FileCreated 
# Unregister-Event FileChanged