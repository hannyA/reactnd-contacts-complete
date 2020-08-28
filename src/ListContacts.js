import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ListContacts extends Component {

    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }
    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }
<<<<<<< HEAD
    
    clearQuery = () => {
        this.updateQuery('')
    }
     
    render() {  
        const { query } = this.state
        const {contacts, onDeleteContact, onNavigate} = this.props

         const showingContacts = query === '' 
         ? contacts
         : contacts.filter((c) => (
             c.name.toLowerCase().includes(query.toLowerCase())
         ))

||||||| d82f37a
=======
    clearQuery = () => {
        this.updateQuery('')
    }
     
    render() {  
        const { query } = this.state
        const {contacts, onDeleteContact} = this.props

         const showingContacts = query === '' 
         ? contacts
         : contacts.filter((c) => (
             c.name.toLowerCase().includes(query.toLowerCase())
         ))

>>>>>>> 393cbffa8b53acb6461238dfd0936975991ce9cd

        return (
            <div className='list-contacts'>
<<<<<<< HEAD
                <div className='list-contacts-top'>
                    <input 
                        className='search-contacts'
                        type='text'
                        placeholder='Search Contacts'
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
||||||| d82f37a
                {JSON.stringify(this.state)}
                <div className='list-contcts-top'>
                <input 
                    className='search-contacts'
                    type='text'
                    placeholder='Search Contacts'
                    value={this.state.query}
                    onChange={(event) => this.updateQuery(event.target.value)}
=======
                
                
                <div className='list-contcts-top'>
                <input 
                    className='search-contacts'
                    type='text'
                    placeholder='Search Contacts'
                    value={this.state.query}
                    onChange={(event) => this.updateQuery(event.target.value)}
>>>>>>> 393cbffa8b53acb6461238dfd0936975991ce9cd
                    />
                    <a
                        href='#create'
                        onClick={onNavigate}
                        className='add-contact'
                        >Add Contact</a>
                                   
                </div>
<<<<<<< HEAD

                { showingContacts.length !== contacts.length && (
                    <div className='showing-contacts'> 
                        <span>
                            Now showing {showingContacts.length} of {contacts.length}
                        </span>
                        <button onClick={this.clearQuery}>Show all</button>
                    </div>
                )}
||||||| d82f37a
=======

                { showingContacts.length !== contacts.length && (
                    <div className='showing-contacts'> 
                        <span>
                            Now showing {showingContacts.length} of {contacts.length}
                        </span>
                        <button onClick={this.clearQuery}>Show all</button>
                    </div>

                )}
>>>>>>> 393cbffa8b53acb6461238dfd0936975991ce9cd
                <ol className='contact-list'>
                    {showingContacts.map(contact => (
                        <li key={contact.id} className={'contact-list-item'}> 
                            <div 
                                className='contact-avatar'
                                style={{
                                    backgroundImage: `url(${contact.avatarURL})`
                                }}
                            ></div>
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>
                            <button 
                            onClick={() => onDeleteContact(contact)}
                                className='contact-remove'>
                                Remove
                            </button>
                        </li>
                    ))}
                </ol> 
            </div>
            
        )
    }
}



export default ListContacts