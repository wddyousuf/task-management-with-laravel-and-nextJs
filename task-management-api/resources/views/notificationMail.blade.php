<!DOCTYPE html>
<html>
<head>
    <title>Welcome</title>
</head>
<body>
<h1>Hello {{ $user->name }}!</h1>
<p>
    A new task {{$task->title}} has been assigned to you. Here is the details:<br>
    Task: {{$task->title}} <br>
    Description: {{$task->description}} <br>
    Deadline: {{$task->deadline}}
</p>
<p>
    Best regards,<br>
    Md. Yousuf Hossain
</p>
</body>
</html>
