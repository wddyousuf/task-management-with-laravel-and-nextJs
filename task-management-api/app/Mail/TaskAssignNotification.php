<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class TaskAssignNotification extends Mailable
{
    use Queueable, SerializesModels;
    public $user;
    public $task;
    /**
     * Create a new message instance.
     */
    public function __construct($user,$task)
    {
        $this->user=$user;
        $this->task=$task;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from : 'saikatyousuf@gmail.com',
            subject: 'Task Assign Notification',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'notificationMail',
            with: [
                'user'=>$this->user,
                'task'=>$this->task
            ]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
