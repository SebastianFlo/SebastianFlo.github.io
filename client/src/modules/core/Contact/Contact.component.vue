<template>
    <div>
        <beautiful-chat :participants="participants" :titleImageUrl="titleImageUrl" :onMessageWasSent="onMessageWasSent"
                        :messageList="messageList" :newMessagesCount="newMessagesCount" :isOpen="isChatOpen" :close="closeChat"
                        :open="openChat" :showEmoji="false" :showFile="false" :showTypingIndicator="showTypingIndicator"
                        :colors="colors" :alwaysScrollToBottom="alwaysScrollToBottom" :messageStyling="messageStyling" />
    </div>
</template>

<script>
export default {
    name: 'SebContact',
    data () {
        return {
            participants: [
                {
                    id: 'sebastian.party',
                    name: 'sebastian.party',
                    imageUrl: 'https://avatars3.githubusercontent.com/u/37018832?s=200&v=4'
                }
            ],
            titleImageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
            messageList: [
                { type: 'text', author: `sebastian.party`,
                    data: {
                        text: `Hey there. Leave a message here and I'll get back to you soon.`
                    }
                }
            ], // the list of the messages to show, can be paginated and adjusted dynamically
            newMessagesCount: 0,
            isChatOpen: false, // to determine whether the chat window should be open or closed
            showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
            colors: {
                header: {
                    bg: '#ffdd57',
                    text: '#ffffff'
                },
                launcher: {
                    bg: '#ffdd57'
                },
                messageList: {
                    bg: '#ffffff'
                },
                sentMessage: {
                    bg: '#ffdd57',
                    text: '#000'
                },
                receivedMessage: {
                    bg: '#eaeaea',
                    text: '#222222'
                },
                userInput: {
                    bg: '#f4f7f9',
                    text: '#565867'
                }
            }, // specifies the color scheme for the component
            // when set to true always scrolls the
            // chat to the bottom when new events are in (new message, user starts typing...)
            alwaysScrollToBottom: false,
            messageStyling: true // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
        }
    },
    methods: {
        sendMessage (text) {
            if (text.length > 0) {
                this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
                this.onMessageWasSent({ author: 'support', type: 'text', data: { text } })
            }
        },
        onMessageWasSent (message) {
            // called when the user sends a message
            this.messageList = [...this.messageList, message]
        },
        openChat () {
            // called when the user clicks on the fab button to open the chat
            this.isChatOpen = true
            this.newMessagesCount = 0
        },
        closeChat () {
            // called when the user clicks on the botton to close the chat
            this.isChatOpen = false
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import './Contact.component';
</style>